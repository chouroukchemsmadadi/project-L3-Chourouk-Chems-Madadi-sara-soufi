<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FactureController;



Route::get('/reservations', [ReservationController::class, 'getAvailableRooms']);
Route::get('/get/chambre', [ReservationController::class, 'getAvailableRoomsBY']);
Route::post('/reservations', [ReservationController::class, 'store']);
Route::post('/chambre-prix', [ReservationController::class, 'getChambrePrix']);
Route::post('/paiements', [FactureController::class, 'store']);
Route::post('/facture', [FactureController::class, 'storeFacture']);


Route::post('/get-user-id', [ReservationController::class, 'getUserIdByEmail']);
Route::post('/verify-payment', [ReservationController::class, 'verifyPayment']);



// Route pour l'enregistrement d'un utilisateur
Route::post('/register', [AuthController::class, 'register']);

// Route pour la connexion d'un utilisateur
Route::post('/login', [AuthController::class, 'login']);

// Route pour la déconnexion d'un utilisateur
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api');

// Route pour récupérer les informations de l'utilisateur connecté
Route::get('/me', [AuthController::class, 'me'])->middleware('auth:api');



// Ajouter un employé
Route::post('/employes', [AdminController::class, 'ajouterEmploye']);

// Modifier un employé (id = id_employe)
Route::put('/employes/{id}', [AdminController::class, 'modifierEmploye']);

// Supprimer un employé
Route::delete('/employes/{id}', [AdminController::class, 'supprimerEmploye']);
Route::get('/users', [AdminController::class, 'index']);
Route::get('/users/by-role', [AdminController::class, 'showByRole']);

Route::put('/chambres/{id}/prix', [AdminController::class, 'updatePrix']);
Route::put('/chambres/{id}/maintenance', [AdminController::class, 'mettreEnMaintenance']);
Route::put('/chambres/{id}/libre', [AdminController::class, 'retirerMaintenance']);
Route::get('/reservationsAdmin', [AdminController::class, 'indexRes']);
Route::get('/historique-reservation-id/{id_reservation}', [AdminController::class, 'historiqueReservationParId']);
Route::post('/ajouter', [AdminController::class, 'AjouterRes']);


Route::put('/reservationsM/{id}', [AdminController::class, 'ModifierReservation']);
Route::delete('/reservationsS/{id}', [AdminController::class, 'SupprimerReservation']);
Route::get('/statistiques/pourcentage-chambres', [AdminController::class, 'pourcentageChambresReservees']);
Route::get('/statistiques/nombre-clients', [AdminController::class, 'nombreClients']);
Route::put('/employe/{id_employe}/modifier-salaire', [AdminController::class, 'modifierSalaireEmploye']);
Route::get('/reservations/total', [AdminController::class, 'nombreTotalReservations']);
Route::post('/reservations/count-by-date', [AdminController::class, 'nombreReservationParDate']);
Route::get('/chambre/plus-reservee', [AdminController::class, 'chambreLaPlusReservee']);
Route::get('/chambre/historiqueReservations/{id_chambre}', [AdminController::class, 'historiqueReservationsChambre']);
Route::get('/chambress', [AdminController::class, 'getChambres']);
Route::put('/chambre/{id}/promotion', [AdminController::class, 'ajouterPromotion']);











