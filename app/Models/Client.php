<?php
namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject; // 🔥 importer JWTSubject
class Client extends Model
{
    protected $table = 'client';
    protected $primaryKey = 'id_client';
    public $timestamps = false;

    protected $fillable = ['nom_compte', 'code'];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_client','id_user');
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class, 'id_client');
    }
}
