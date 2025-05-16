<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $table = 'service';
    protected $primaryKey = 'id_service';

    public function employe()
    {
        return $this->belongsTo(Employe::class, 'id_employe');
    }

    public function commandes()
    {
        return $this->hasMany(CommandeService::class, 'id_service');
    }
}
