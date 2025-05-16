<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $table = 'reservation';
    protected $primaryKey = 'id_reservation';
    public $timestamps = false;

    protected $fillable = [
        'id_client',
        'statut',
        'date_debut',
        'date_fin',
        'nombre_personnes',
        'nombre_bebes',
        'nombre_enfants',
        'nombre_chambre',
        'buffet'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

	public function chambres()
	{
		return $this->belongsToMany(Chambre::class, 'reservation_chambre', 'id_reservation', 'id_chambre');
	}
}
