<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable; // Utilisation d'Authenticatable pour les fonctionnalités d'authentification
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;



class User extends Authenticatable
{
    use HasFactory;

    protected $table = 'users'; // Nom de la table
    protected $primaryKey = 'id_user'; // Clé primaire
    public $timestamps = false; // Désactiver les timestamps si non utilisés

    protected $fillable = [
        'nom',
        'prenom',
        'role',
        'email',
        'tel',
        'motDePasse',
        'role',
    ];

    protected $hidden = [
        'motDePasse', // Masquer le mot de passe dans les réponses JSON
        'remember_token',
    ];

    /**
     * Relation avec le modèle Client.
     * Un utilisateur peut être associé à un client via id_user.
     */
    public function client()
    {
        return $this->hasOne(Client::class, 'id_client', 'id_user');
    }

    /**
     * Relation avec le modèle Employe.
     * Un utilisateur peut être associé à un employé via id_user.
     */
    public function employe()
    {
        return $this->hasOne(Employe::class, 'id_employe', 'id_user');
    }

    /**
     * Relation avec le modèle Admin.
     * Un utilisateur peut être associé à un administrateur via id_user.
     */
    public function admin()
    {
        return $this->hasOne(Admin::class, 'id_admin', 'id_user');
    }
    // Dans le fichier app/Models/User.php
public function getAuthPassword()
{
    return $this->motDePasse;
}





}