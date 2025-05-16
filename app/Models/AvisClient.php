<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AvisClient extends Model
{
    protected $table = 'avis_client';
    protected $primaryKey = 'id_avis';

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    public function reservation()
    {
        return $this->belongsTo(Reservation::class, 'id_reservation');
    }
}
