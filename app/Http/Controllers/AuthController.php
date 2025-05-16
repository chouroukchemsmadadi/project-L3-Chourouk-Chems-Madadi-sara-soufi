<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Client;
use App\Models\Employe;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    // Enregistrement utilisateur
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'nom' => 'required|string|max:255',
        'prenom' => 'required|string|max:255',
        'email' => 'required|string|email|max:255|unique:users',
        'motDePasse' => 'required|string|min:6',
        'tel' => 'required|string|max:15',
        'role' => 'required|string', // client ou employe
        'salaire' => 'nullable|numeric', // Salaire pour employé
        'employe_role' => 'nullable|string|max:255', // Rôle spécifique de l'employé
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    try {
        // Création de l'utilisateur
        $user = User::create([
            'nom' => $request->nom,
            'prenom' => $request->prenom,
            'email' => $request->email,
            'role' => $request->role ?? 'client', // Dans table user -> "client" ou "employe"
            'tel' => $request->tel,
            'motDePasse' => Hash::make($request->motDePasse),
        ]);

        // Si client => création dans la table client
        if (($request->role ?? 'client') === 'client') {
            $client = new Client();
            $client->id_client = $user->id_user;
            $client->nom_compte = 'paye';
            $client->code = '1234';
            $client->save();

            \Log::info('Client créé avec succès', [
                'id_client' => $client->id_client
            ]);
        }
        // Si employé => création dans la table employe
 elseif (($request->role ?? '') === 'employe') {
    $employe = new Employe();
    $employe->id_employe = $user->id_user; // 🔥 ici c'est id_employe pas id_user
    $employe->salaire = $request->salaire ?? 0;
    $employe->role = $request->employe_role ?? 'employe';
    $employe->save();

    \Log::info('Employé créé avec succès', [
        'id_employe' => $employe->id_employe
    ]);
}

        return response()->json([
            'message' => 'Utilisateur créé avec succès',
            'user' => $user
        ], 201);

    } catch (\Exception $e) {
        \Log::error('Erreur lors de la création de l\'utilisateur', [
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        return response()->json([
            'message' => 'Erreur: ' . $e->getMessage()
        ], 500);
    }
}








public function login(Request $request)
{
    $validator = Validator::make($request->all(), [
        'email' => 'required|string|email|max:255',
        'motDePasse' => 'required|string|min:6',
    ]);

    if ($validator->fails()) {
        return response()->json($validator->errors(), 422);
    }

    // On récupère les identifiants
    $credentials = [
        'email' => $request->email,
        'motDePasse' => $request->motDePasse,
    ];

    // Rechercher manuellement l'utilisateur (sans JWT)
    $user = User::where('email', $credentials['email'])
                ->where('motDePasse', $credentials['motDePasse']) // PAS HASH, brut
                ->first();

    if (!$user) {
        return response()->json(['message' => 'Identifiants incorrects'], 401);
    }

    // Déterminer le dashboard selon le rôle
    if ($user->role === 'client') {
        $redirect = '/client/dashboard';
    } elseif ($user->role === 'employe') {
        $redirect = '/employe/dashboard';
    } elseif ($user->role === 'admin') {
        $redirect = '/admin/dashboard';
    } else {
        $redirect = '/';
    }

    return response()->json([
        'message' => 'Utilisateur connecté avec succès',
        'user' => $user,
        'redirect' => $redirect,
    ], 200);
}


    
    // Déconnexion
    public function logout()
    {
        JWTAuth::invalidate(JWTAuth::getToken());
        return response()->json(['message' => 'Déconnexion réussie']);
    }

    // Profil utilisateur connecté
    public function me()
    {
        return response()->json(JWTAuth::user());
    }
}