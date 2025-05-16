<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationChambre extends Model
{
    protected $table = 'reservation_chambre';
    public $timestamps = false;

    protected $fillable = ['id_reservation', 'id_chambre'];




    
    // Relation avec la réservation
    public function reservation()
    {
        return $this->belongsTo(Reservation::class, 'id_reservation', 'id_reservation');
    }

    // Relation avec la chambre
    public function chambre()
    {
        return $this->belongsTo(Chambre::class, 'id_chambre', 'id_chambre');
    }

    // Accesseurs pour faciliter l'accès aux informations
    public function getReservationDetailsAttribute()
    {
        return $this->reservation;
    }

    public function getChambreDetailsAttribute()
    {
        return $this->chambre;
    }

}