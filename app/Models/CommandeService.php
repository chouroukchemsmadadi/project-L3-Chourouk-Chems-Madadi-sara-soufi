<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommandeService extends Model
{
    protected $table = 'commande_service';
    protected $primaryKey = 'id_commande';

    public function client()
    {
        return $this->belongsTo(Client::class, 'id_client');
    }

    public function service()
    {
        return $this->belongsTo(Service::class, 'id_service');
    }
}
