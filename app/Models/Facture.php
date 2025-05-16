<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    protected $table = 'facture';
    protected $primaryKey = 'id_facture';
    public $timestamps = false;

    
    protected $fillable = [
        'id_reservation',
        'id_client',
        'montant_total',
        'date_facture',
        'methode_paiement',
        'statut',
        'prix_buffetmatin',
        'prix_buffetnuit',
    ];


    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    public function reservation()
    {
        return $this->belongsTo(Reservation::class, 'id_reservation');
    }

    public function paiements()
    {
        return $this->hasMany(Paiement::class, 'id_facture');
    }
}
