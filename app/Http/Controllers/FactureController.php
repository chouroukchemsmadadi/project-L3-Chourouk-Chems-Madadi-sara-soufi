<?php

namespace App\Http\Controllers;
use App\Models\Facture;
use App\Models\Reservation;
use App\Models\Client;
use App\Models\Chambre;
use App\Models\ReservationChambre;
use App\Models\Paiement;



use Illuminate\Http\Request;

class FactureController extends Controller
{
   





    public function storeFacture(Request $request)
    {
        $validated = $request->validate([
            'id_reservation' => 'required|exists:reservation,id_reservation',
            'id_client' => 'required|exists:client,id_client',
            'montant_total' => 'required|numeric',
            'methode_paiement' => 'required|string',
            'prix_buffetmatin' => 'nullable|numeric',
            'prix_buffetnuit' => 'nullable|numeric',
        ]);
    
        $validated['date_facture'] = now();
        $validated['statut'] = 'payée';
    
        try {
            $facture = Facture::create($validated);
            return response()->json([
                'message' => 'Facture enregistrée avec succès.',
                'facture' => $facture
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erreur lors de l’enregistrement.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    



    public function store(Request $request)
    {
        // Validation des données entrantes
        $validated = $request->validate([
            'id_client' => 'required|exists:client,id_client',
            'id_facture' => 'required|exists:facture,id_facture',
            // On supprime 'statut' de la validation
        ]);
    
        // Création du paiement avec statut par défaut "effectué"
        $paiement = Paiement::create([
            'id_client' => $validated['id_client'],
            'id_facture' => $validated['id_facture'],
            'date_paiement' => now(), // Date du jour
            'statut' => 'effectué',    // Statut automatique
        ]);
    
        // Retourner la réponse
        return response()->json([
            'message' => 'Paiement enregistré avec succès',
            'data' => $paiement
        ], 201);
    }
    
    
}
