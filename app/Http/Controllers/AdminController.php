<?php

namespace App\Http\Controllers;
use App\Models\Employe;
use App\Models\User;
use App\Models\Chambre;
use App\models\Reservation;
use App\Models\ReservationChambre;
use App\Models\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function ajouterEmploye(Request $request)
    {
        $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'tel' => 'required|string',
            'motDePasse' => 'required|string|min:6',
            // Ajoute les champs nécessaires pour l'employé ici
        ]);
    
        // Création de l'utilisateur
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'tel' => $request->tel,
            'motDePasse' => bcrypt($request->motDePasse),
            'role' => 'employe',
        ]);
    
        // Création de l'employé lié
        $employe = Employe::create([
            'id_employe' => $user->id_user,
            // Ajoute ici les autres champs spécifiques à l'employé
        ]);
    
        return response()->json(['message' => 'Employé ajouté avec succès', 'employe' => $employe], 201);
    }

    








    public function modifierEmploye(Request $request, $id)
{
    $employe = Employe::findOrFail($id);
    $user = $employe->user;

    $request->validate([
        'nom' => 'nullable|string',
        'prenom' => 'nullable|string',
        'email' => 'nullable|email|unique:users,email,' . $user->id_user . ',id_user',
        'tel' => 'nullable|string',
        'motDePasse' => 'nullable|string|min:6',
        // Ajoute ici les champs spécifiques à modifier pour l’employé
    ]);

    $user->update([
        'nom' => $request->nom ?? $user->nom,
        'prenom' => $request->prenom ?? $user->prenom,
        'email' => $request->email ?? $user->email,
        'tel' => $request->tel ?? $user->tel,
        'motDePasse' => $request->filled('motDePasse') ? bcrypt($request->motDePasse) : $user->motDePasse,
    ]);

    // Mise à jour des champs spécifiques à l'employé si nécessaire
    $employe->update([
        // Ex: 'poste' => $request->poste ?? $employe->poste,
    ]);

    return response()->json(['message' => 'Employé modifié avec succès']);
}









public function supprimerEmploye($id)
{
    $employe = Employe::findOrFail($id);
    $user = $employe->user;

    $employe->delete();
    $user->delete(); // Suppression de l'utilisateur lié aussi

    return response()->json(['message' => 'Employé supprimé avec succès']);
}



public function index()
{
    $users = User::select('nom', 'prenom', 'role', 'email', 'tel')->get();
    return response()->json($users);
}





public function showByRole(Request $request)
{
    $role = $request->query('role'); // exemple : ?role=employe

    if (!in_array($role, ['admin', 'employe', 'client'])) {
        return response()->json(['message' => 'Rôle invalide'], 400);
    }

    $users = User::where('role', $role)->select('nom', 'prenom', 'role', 'email', 'tel')->get();

    return response()->json([
        'role' => $role,
        'data' => $users
    ]);
}





public function updatePrix(Request $request, $id)
{
    $request->validate([
        'prix' => 'required|numeric|min:0',
    ]);

    $chambre = Chambre::find($id);

    if (!$chambre) {
        return response()->json(['message' => 'Chambre non trouvée'], 404);
    }

    $chambre->prix = $request->prix;
    $chambre->save();

    return response()->json([
        'message' => 'Prix mis à jour avec succès',
        'data' => $chambre
    ]);
}




public function mettreEnMaintenance($id_chambre)
{
    // Vérifier si la chambre existe
    $chambre = Chambre::find($id_chambre);

    if (!$chambre) {
        return response()->json(['message' => 'Chambre non trouvée.'], 404);
    }

    // Modifier le statut
    $chambre->statut = 'maintenance';
    $chambre->save();

    return response()->json(['message' => 'Statut de la chambre mis à jour en maintenance.'], 200);
}
public function retirerMaintenance($id_chambre)
{
    // Vérifier si la chambre existe
    $chambre = Chambre::find($id_chambre);

    if (!$chambre) {
        return response()->json(['message' => 'Chambre non trouvée.'], 404);
    }

    // Mettre à jour le statut en "libre"
    $chambre->statut = 'libre';
    $chambre->save();

    return response()->json(['message' => 'Statut de la chambre mis à jour en libre.'], 200);
}
public function indexRes()
{
    $reservations = Reservation::select('id_reservation', 'date_debut', 'date_fin')->get();

    return response()->json([
        'reservations' => $reservations
    ]);
}
 





public function historiqueReservationParId($id_reservation)
{
    $reservation = Reservation::select([
            'id_reservation',
            'id_client',
            'date_debut',
            'date_fin',
            'statut',
            'nombre_personnes',
            'nombre_bebes',
            'nombre_enfants',
            'nombre_chambre',
            'buffet'
        ])
        ->with([
           'client.user:id_user,nom,prenom', // charger l'utilisateur lié au client // Charger nom/prenom depuis la table users
            'chambres:id_chambre,numero,type,prix,statut,vue'
        ])
        ->find($id_reservation);

    if (!$reservation) {
        return response()->json(['message' => 'Réservation introuvable'], 404);
    }

    return response()->json(['reservation' => $reservation]);
}

public function AjouterRes(Request $request)
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




    public function ModifierReservation(Request $request, $id_reservation)
    {
        // Validation des données
        $validatedData = $request->validate([
            'id_client' => 'required|integer|exists:client,id_client',
            'nombre_chambre' => 'required|integer|min:1|max:32',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after:date_debut',
            'nombre_personnes' => 'required|integer|min:1',
            'nombre_enfants' => 'required|integer|min:0',
            'nombre_bebes' => 'required|integer|min:0',
            'buffet' => 'nullable|string|in:matin,nuit,matin et nuit,none',
            'statut' => 'nullable|string|in:en attente,confirmée,annulée',
            'chambres' => 'required|array',
        ]);
    
        \Log::info('Données reçues pour modification:', $validatedData);
    
        try {
            // Trouver la réservation existante
            $reservation = Reservation::findOrFail($id_reservation);
    
            // Mettre à jour les attributs de la réservation
            $reservation->update([
                'id_client' => $validatedData['id_client'],
                'nombre_chambre' => $validatedData['nombre_chambre'],
                'date_debut' => $validatedData['date_debut'],
                'date_fin' => $validatedData['date_fin'],
                'nombre_personnes' => $validatedData['nombre_personnes'],
                'nombre_enfants' => $validatedData['nombre_enfants'],
                'nombre_bebes' => $validatedData['nombre_bebes'],
                'buffet' => $validatedData['buffet'],
                'statut' => $validatedData['statut'] ?? 'en attente'
            ]);
    
            // Supprimer les anciennes associations de chambres
            ReservationChambre::where('id_reservation', $reservation->id_reservation)->delete();
    
            // Ajouter les nouvelles chambres
            foreach ($validatedData['chambres'] as $type => $vues) {
                foreach ($vues as $vue => $roomNumbers) {
                    foreach ($roomNumbers as $roomNumber) {
                        $chambre = Chambre::where('numero', $roomNumber)->first();
                        
                        if ($chambre) {
                            ReservationChambre::create([
                                'id_reservation' => $reservation->id_reservation,
                                'id_chambre' => $chambre->id_chambre,
                            ]);
                        }
                    }
                }
            }
    
            \Log::info('Réservation modifiée avec succès');
    
            return response()->json([
                'message' => 'Réservation modifiée avec succès.',
                'reservation' => $reservation
            ]);
    
        } catch (\Exception $e) {
            \Log::error('Erreur lors de la modification de la réservation: ' . $e->getMessage());
            
            return response()->json([
                'error' => 'Erreur lors de la modification.',
                'message' => $e->getMessage()
            ], 500);
        }
    }










public function SupprimerReservation($id)
{
    try {
        // Vérifier si la réservation existe
        $reservation = Reservation::find($id);

        if (!$reservation) {
            return response()->json(['error' => 'Réservation non trouvée.'], 404);
        }

        // Supprimer d'abord les lignes associées dans reservation_chambre
        ReservationChambre::where('id_reservation', $id)->delete();

        // Supprimer la réservation elle-même
        $reservation->delete();

        return response()->json(['message' => 'Réservation supprimée avec succès.']);
    } catch (\Exception $e) {
        \Log::error('Erreur lors de la suppression de la réservation: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur lors de la suppression.', 'details' => $e->getMessage()], 500);
    }
}







public function pourcentageChambresReservees()
{
    try {
        $totalChambres = 32; // Nombre total fixe

        // Nombre de chambres actuellement réservées (distinctes)
        $chambresReservees = \App\Models\ReservationChambre::distinct('id_chambre')->count('id_chambre');

        // Calcul du pourcentage
        $pourcentage = ($chambresReservees / $totalChambres) * 100;

        return response()->json([
            'total_chambres' => $totalChambres,
            'chambres_reservees' => $chambresReservees,
            'pourcentage_reservees' => round($pourcentage, 2) . '%'
        ]);
    } catch (\Exception $e) {
        \Log::error('Erreur lors du calcul des pourcentages: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur serveur', 'details' => $e->getMessage()], 500);
    }
}







public function nombreClients()
{
    try {
        $totalClients = \App\Models\Client::count();

        return response()->json([
            'total_clients' => $totalClients
        ]);
    } catch (\Exception $e) {
        \Log::error('Erreur lors du comptage des clients: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur serveur', 'details' => $e->getMessage()], 500);
    }
}







public function modifierSalaireEmploye(Request $request, $id_employe)
{
    $validatedData = $request->validate([
        'salaire' => 'required|numeric|min:0',  // Validation du salaire (doit être un nombre positif)
    ]);

    try {
        // Récupérer l'employé à partir de son ID
        $employe = Employe::find($id_employe);

        if (!$employe) {
            return response()->json(['error' => 'Employé non trouvé'], 404);
        }

        // Mettre à jour le salaire de l'employé
        $employe->salaire = $validatedData['salaire'];
        $employe->save();

        return response()->json(['message' => 'Salaire modifié avec succès.']);
    } catch (\Exception $e) {
        \Log::error('Erreur lors de la modification du salaire de l\'employé: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur serveur', 'details' => $e->getMessage()], 500);
    }
}







public function nombreTotalReservations()
{
    try {
        $total = Reservation::count();

        return response()->json([
            'total_reservations' => $total
        ]);
    } catch (\Exception $e) {
        \Log::error('Erreur lors du calcul du nombre total des réservations: ' . $e->getMessage());
        return response()->json([
            'error' => 'Erreur serveur',
            'details' => $e->getMessage()
        ], 500);
    }
}






public function nombreReservationParDate(Request $request)
{
    $request->validate([
        'date' => 'required|date',
    ]);

    try {
        $date = $request->input('date');

        // Rechercher les réservations où la date donnée est comprise entre date_debut et date_fin
        $count = Reservation::whereDate('date_debut', '<=', $date)
                            ->whereDate('date_fin', '>=', $date)
                            ->count();

        return response()->json([
            'date' => $date,
            'nombre_reservations' => $count
        ]);

    } catch (\Exception $e) {
        \Log::error('Erreur lors du comptage des réservations: ' . $e->getMessage());
        return response()->json([
            'error' => 'Erreur serveur',
            'details' => $e->getMessage()
        ], 500);
    }
}






public function chambreLaPlusReservee()
{
    try {
        $chambre = \DB::table('reservation_chambre')
            ->join('chambre', 'reservation_chambre.id_chambre', '=', 'chambre.id_chambre')
            ->select('chambre.type', 'chambre.vue', \DB::raw('COUNT(*) as total_reservations'))
            ->groupBy('chambre.type', 'chambre.vue')
            ->orderByDesc('total_reservations')
            ->first();

        if (!$chambre) {
            return response()->json(['message' => 'Aucune chambre trouvée.'], 404);
        }

        return response()->json([
            'type_chambre' => $chambre->type,
            'vue' => $chambre->vue,
            'nombre_de_reservations' => $chambre->total_reservations
        ]);

    } catch (\Exception $e) {
        \Log::error('Erreur lors de la récupération de la chambre la plus réservée: ' . $e->getMessage());
        return response()->json(['error' => 'Erreur serveur', 'details' => $e->getMessage()], 500);
    }
}





public function historiqueReservationsChambre($id_chambre)
{
    // On récupère toutes les réservations liées à cette chambre
    $reservations = ReservationChambre::where('id_chambre', $id_chambre)
        ->with(['reservation.client', 'chambre']) // Charger aussi le client et la chambre
        ->get();

    // Si aucune réservation trouvée
    if ($reservations->isEmpty()) {
        return response()->json([
            'success' => false,
            'message' => 'Aucune réservation trouvée pour cette chambre',
        ]);
    }

    // Retourner l'historique
    return response()->json([
        'success' => true,
        'message' => 'Historique des réservations récupéré avec succès',
        'historique' => $reservations
    ]);
}

    public function getChambres()
    {
        $chambres = Chambre::all(); // récupère toutes les chambres avec tous les attributs
    
        return response()->json([
            'success' => true,
            'chambres' => $chambres
        ]);
}







public function ajouterPromotion(Request $request, $id_chambre)
{
    // Valider l'entrée
    $request->validate([
        'pourcentage' => 'required|numeric|min:0|max:100',
    ]);

    // Trouver la chambre par ID
    $chambre = Chambre::find($id_chambre);

    if (!$chambre) {
        return response()->json([
            'success' => false,
            'message' => 'Chambre non trouvée'
        ], 404);
    }

    // Sauvegarder l'ancien prix
    $ancienPrix = $chambre->prix;

    // Calcul du nouveau prix
    $pourcentage = $request->input('pourcentage');
    $nouveauPrix = $ancienPrix - ($ancienPrix * ($pourcentage / 100));

    // Mise à jour
    $chambre->prix = $nouveauPrix;
    $chambre->save();

    // Retourner la réponse JSON
    return response()->json([
        'success' => true,
        'message' => 'Promotion appliquée avec succès',
        'ancien_prix' => $ancienPrix,
        'nouveau_prix' => $chambre->prix
    ]);
}







}
