<?php

namespace App\Http\Controllers;

use App\Models\Chambre;
use App\Models\Reservation;
use App\Models\Promotion;
use Illuminate\Http\Request;

class RoomsController extends Controller
{
    // Méthode pour créer une nouvelle chambre
    public function store(Request $request)
    {
        $request->validate([
            'numero' => 'required|string|max:50',
            'type_chambre' => 'required|string|max:50',
            'prix' => 'required|numeric',
            'etat' => 'required|in:Disponible,Occupe,Maintenance',
            'equipements' => 'nullable|array',
            'images' => 'nullable|array',
        ]);

        $room = new Chambre();
        $room->numero = $request->numero;
        $room->type_chambre = $request->type_chambre;
        $room->prix = $request->prix;
        $room->etat = $request->etat;
        $room->equipements = json_encode($request->equipements);  // Stockage sous forme JSON
        $room->save();

        // Traitement pour les images (si besoin)

        return response()->json(['message' => 'Chambre créée avec succès'], 201);
    }





    public function addRoom(Request $request) {
        $room = new Room;
        $room->name = $request->name;
        $room->description = $request->description;
        $room->price = $request->price;
        $room->status = $request->status;
        $room->promotion = $request->promotion;
        $room->discount = $request->discount;
        $room->promotionPeriod = $request->promotionPeriod;
        $room->save();  // حفظ الغرفة في قاعدة البيانات
    
        return response()->json($room, 200);
    }
    

    // Méthode pour afficher toutes les chambres
    public function index()
    {
        $rooms = Chambre::all();
        return response()->json($rooms);
    }

    // Méthode pour afficher les détails d'une chambre spécifique
    public function show($id)
    {
        $room = Chambre::findOrFail($id);
        return response()->json($room);
    }

    // Méthode pour modifier une chambre
    public function update(Request $request, $id)
    {
        $room = Chambre::findOrFail($id);

        $request->validate([
            'prix' => 'nullable|numeric',
            'etat' => 'nullable|in:Disponible,Occupe,Maintenance',
            'equipements' => 'nullable|array',
            'images' => 'nullable|array',
        ]);

        $room->prix = $request->prix ?? $room->prix;
        $room->etat = $request->etat ?? $room->etat;
        $room->equipements = $request->equipements ? json_encode($request->equipements) : $room->equipements;
        $room->save();

        return response()->json(['message' => 'Chambre modifiée avec succès']);
    }

    // Méthode pour supprimer une chambre
    public function destroy($id)
    {
        $room = Chambre::findOrFail($id);
        $room->delete();  // Ou marquer comme supprimée avec `is_deleted = true`

        return response()->json(['message' => 'Chambre supprimée']);
    }

    // Méthode pour changer le statut d'une chambre
    public function updateStatus(Request $request, $id)
    {
        $room = Chambre::findOrFail($id);

        $request->validate([
            'etat' => 'required|in:Disponible,Occupe,Maintenance',
        ]);

        $room->etat = $request->etat;
        $room->save();

        return response()->json(['message' => 'Statut de la chambre mis à jour']);
    }

    // Méthode pour consulter l'historique des réservations d'une chambre
    public function history($id)
    {
        $room = Chambre::findOrFail($id);
        $history = Reservation::where('id_chambre', $id)
                              ->where('date_fin', '<', now())
                              ->get();

        return response()->json($history);
    }






    public static function chercherChambres($type, $vue)
{
    return self::where('type', $type)
        ->where('vue', $vue)
        ->with(['reservations']) // Charger les réservations
        ->get()
        ->map(function ($chambre) {
            $chambre->est_reservee = $chambre->reservations->isNotEmpty(); // Si des réservations existent
            return $chambre;
        });
}
}
