<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    protected $table = 'paiement';
    protected $primaryKey = 'id_paiement';
    public $timestamps = false;

    protected $fillable = [
        'id_client',
        'id_facture',
        'date_paiement',
        'statut'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    public function facture()
    {
        return $this->belongsTo(Facture::class, 'id_facture');
    }
}
