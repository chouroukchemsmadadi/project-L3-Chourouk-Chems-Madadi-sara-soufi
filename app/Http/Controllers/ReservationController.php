<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reservation;
use App\Models\Client;
use App\Models\Chambre;
use App\Models\User;
use App\Models\ReservationChambre;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ReservationController extends Controller
{
    /**
     * Recherche des chambres disponibles.
     */

     public function getChambreIdByNumero(Request $request)
     {
         $validatedData = $request->validate([
             'numero' => 'required|string', // Le numéro de chambre est requis
         ]);
     
         try {
             // Récupérer l'id_chambre à partir du numéro de chambre
             $chambre = Chambre::where('numero', $validatedData['numero'])->first();
     
             if (!$chambre) {
                 return response()->json(['error' => 'Chambre introuvable.'], 404);
             }
     
             // Retourner l'id_chambre
             return response()->json(['id_chambre' => $chambre->id_chambre]);
         } catch (\Exception $e) {
             \Log::error('Erreur lors de la récupération de l\'id_chambre: ' . $e->getMessage());
             return response()->json(['error' => 'Erreur lors de la récupération de l\'id_chambre.', 'details' => $e->getMessage()], 500);
         }
     }
















    public function getUserIdByEmail(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email|exists:users,email', // Vérifie que l'email existe dans la table users
        ]);
    
        try {
            // Récupérer l'utilisateur à partir de l'email
            $user = User::where('email', $validatedData['email'])->first();
    
            if (!$user) {
                return response()->json(['error' => 'Utilisateur introuvable.'], 404);
            }
    
            // Retourner l'id_user
            return response()->json(['id_user' => $user->id_user]);
        } catch (\Exception $e) {
            \Log::error('Erreur lors de la récupération de l\'utilisateur: ' . $e->getMessage());
            return response()->json(['error' => 'Erreur lors de la récupération de l\'utilisateur.', 'details' => $e->getMessage()], 500);
        }
    }





   
public function verifyPayment(Request $request)
{
    $validatedData = $request->validate([
        'id_user' => 'required|integer|exists:users,id_user', // Vérifie que l'id_user existe dans la table users
        'nom_compte' => 'required|string',
        'code' => 'required|string',
    ]);

    try {
        // Vérifier si le client existe et si les informations sont valides
        $client = Client::where('id_client', $validatedData['id_user']) // id_client est une clé étrangère de id_user
            ->where('nom_compte', $validatedData['nom_compte'])
            ->where('code', $validatedData['code'])
            ->first();

        if (!$client) {
            return response()->json(['error' => 'Nom du compte ou code incorrect.'], 400);
        }

        // Retourner l'id_client si tout est correct
        return response()->json(['id_client' => $client->id_client]);
    } catch (\Exception $e) {
        \Log::error('Erreur lors de la vérification du paiement: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur lors de la vérification du paiement.', 'details' => $e->getMessage()], 500);
    }
}
public function getAvailableRooms(Request $request)
{
    $dateDebut = $request->query('start');
    $dateFin = $request->query('end');

    // Vérifier que les dates sont fournies
    if (!$dateDebut || !$dateFin) {
        return response()->json(['error' => 'Les dates de début et de fin sont requises.'], 400);
    }

    try {
        // Vérifier les réservations confirmées qui chevauchent les dates fournies
        $reservedReservationIds = Reservation::where('statut', 'confirmee')
            ->where(function ($query) use ($dateDebut, $dateFin) {
                $query->whereBetween('date_debut', [$dateDebut, $dateFin])
                      ->orWhereBetween('date_fin', [$dateDebut, $dateFin])
                      ->orWhere(function ($query) use ($dateDebut, $dateFin) {
                          $query->where('date_debut', '<=', $dateDebut)
                                ->where('date_fin', '>=', $dateFin);
                      });
            })
            ->pluck('id_reservation');

        // Récupérer les ID des chambres associées aux réservations confirmées
        $reservedChambreIds = ReservationChambre::whereIn('id_reservation', $reservedReservationIds)
            ->pluck('id_chambre');

        // Récupérer les chambres libres (non réservées)
        $availableRooms = Chambre::whereNotIn('id_chambre', $reservedChambreIds)
            ->where('statut', 'Libre')
            ->select('type', 'vue', 'numero') // Sélectionner uniquement les colonnes nécessaires
            ->get();

        // Retourner les chambres disponibles
        return response()->json($availableRooms);
    } catch (\Exception $e) {
        \Log::error('Erreur lors de la récupération des chambres disponibles: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur lors de la récupération des chambres disponibles.', 'details' => $e->getMessage()], 500);
    }
}
    /**
     * Enregistrer une nouvelle réservation.
     */
   
     public function store(Request $request)
     {
         $validatedData = $request->validate([
             'id_client' => 'required|integer|exists:client,id_client',
             'nombre_chambre' => 'required|integer|min:1|max:32',
             'date_debut' => 'required|date',
             'date_fin' => 'required|date|after:date_debut',
             'nombre_personnes' => 'required|integer|min:1',
             'nombre_enfants' => 'required|integer|min:0',
             'nombre_bebes' => 'required|integer|min:0',
             'buffet' => 'nullable|string|in:matin,nuit,matin et nuit,none',
             'chambres' => 'required|array', // Valider que le champ "chambres" est un tableau
         ]);
     
         try {
             $validatedData['statut'] = 'en attente';
     
             // Créer la réservation
             $reservation = Reservation::create($validatedData);
     
             // Parcourir les chambres fournies dans le champ "chambres"
             foreach ($validatedData['chambres'] as $type => $vues) {
                 foreach ($vues as $vue => $roomNumbers) {
                     foreach ($roomNumbers as $roomNumber) {
                         // Récupérer l'id_chambre à partir du numéro de chambre
                         $chambre = Chambre::where('numero', $roomNumber)->first();
     
                         if ($chambre) {
                             // Associer la chambre à la réservation dans la table reservation_chambre
                             ReservationChambre::create([
                                 'id_reservation' => $reservation->id_reservation,
                                 'id_chambre' => $chambre->id_chambre,
                             ]);
     
                         }
                     }
                 }
             }
     
            
            
     
             return response()->json(['message' => 'Réservation effectuée avec succès.'], 201);
         } catch (\Exception $e) {
             \Log::error('Erreur lors de la réservation: ' . $e->getMessage());
             return response()->json(['error' => 'Erreur lors de la réservation.', 'details' => $e->getMessage()], 500);
         }
     }
   
public function getChambrePrix(Request $request)
{
    // Retrieve the selected types and views from the request
    $selectedTypes = $request->input('selectedTypes');

    // Validate that the input is an array
    if (!is_array($selectedTypes)) {
        return response()->json(['error' => 'Les données fournies sont invalides.'], 400);
    }

    // Initialize a collection to store the selected rooms
    $chambres = collect();

    try {
        // Loop through the selected types and views
        foreach ($selectedTypes as $type => $vues) {
            if (!is_array($vues)) {
                continue; // Skip invalid data
            }

            foreach ($vues as $vue => $count) {
                // Ensure $count is a valid number
                $count = intval($count);
                if ($count <= 0) {
                    continue; // Skip if no rooms are requested
                }

                // Fetch available rooms matching the type, view, and status
                $availableRooms = Chambre::where('type', $type)
                    ->where('vue', $vue)
                    ->where('statut', 'Libre')
                    ->take($count)
                    ->get();

                // Merge the fetched rooms into the collection
                $chambres = $chambres->merge($availableRooms);
            }
        }

        // Check if any rooms were found
        if ($chambres->isEmpty()) {
            return response()->json(['error' => 'Aucune chambre trouvée.'], 404);
        }

        // Calculate the average price of the selected rooms
        $pricePerRoom = $chambres->avg('prix');

        // Return the average price
        return response()->json(['pricePerRoom' => $pricePerRoom]);
    } catch (\Exception $e) {
        // Log the error and return a 500 response
        Log::error('Erreur lors de la récupération des prix des chambres: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur lors de la récupération des prix des chambres.', 'details' => $e->getMessage()], 500);
    }
}










public function getAvailableRoomsBY(Request $request)
{
    $dateDebut = $request->query('start');
    $dateFin = $request->query('end');
    $type = $request->query('type');
    $vue = $request->query('vue');

    // Vérifier que les paramètres obligatoires sont fournis
    if (!$dateDebut || !$dateFin || !$type || !$vue) {
        return response()->json(['error' => 'Les champs start, end, type et vue sont requis.'], 400);
    }

    try {
        // Identifier les réservations confirmées qui chevauchent la période donnée
        $reservedReservationIds = Reservation::where('statut', 'confirmee')
            ->where(function ($query) use ($dateDebut, $dateFin) {
                $query->whereBetween('date_debut', [$dateDebut, $dateFin])
                      ->orWhereBetween('date_fin', [$dateDebut, $dateFin])
                      ->orWhere(function ($query) use ($dateDebut, $dateFin) {
                          $query->where('date_debut', '<=', $dateDebut)
                                ->where('date_fin', '>=', $dateFin);
                      });
            })
            ->pluck('id_reservation');

        // Obtenir les chambres déjà réservées
        $reservedChambreIds = ReservationChambre::whereIn('id_reservation', $reservedReservationIds)
            ->pluck('id_chambre');

        // Sélectionner les chambres disponibles selon le type et la vue donnés
        $availableRooms = Chambre::whereNotIn('id_chambre', $reservedChambreIds)
            ->where('statut', 'Libre')
            ->where('type', $type)
            ->where('vue', $vue)
            ->select('id_chambre', 'numero', 'type', 'vue', 'prix') // Tu peux adapter les colonnes ici
            ->get();

        return response()->json($availableRooms);
    } catch (\Exception $e) {
        \Log::error('Erreur lors de la récupération des chambres disponibles: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur lors de la récupération des chambres disponibles.', 'details' => $e->getMessage()], 500);
    }
}
}