<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chambre extends Model
{
    use HasFactory;

    protected $table = 'chambre';
	
	// filepath: c:\pms\backend\laravel-react-api\app\Models\Chambre.php
	protected $primaryKey = 'id_chambre';
	public $incrementing = true; // إذا كان المفتاح الأساسي يستخدم الترقيم التلقائي
	protected $keyType = 'int'; 
	public $timestamps = false;
    protected $fillable = [
        'vue', 
        'type', 
        'prix', 
        'numero', 
        'statut'
    ];
	
public function reservations()
{
    return $this->belongsToMany(Reservation::class, 'reservation_chambre', 'id_chambre', 'id_reservation');
}
}

