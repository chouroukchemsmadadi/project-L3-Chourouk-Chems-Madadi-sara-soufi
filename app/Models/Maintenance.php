<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Maintenance
 * 
 * @property int $id_maintenance
 * @property int $id_chambre
 * @property Carbon $date_maintenance
 * @property string $description
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Chambre $chambre
 *
 * @package App\Models
 */
class Maintenance extends Model
{
	protected $table = 'maintenance';
	protected $primaryKey = 'id_maintenance';

	protected $casts = [
		'id_chambre' => 'int',
		'date_maintenance' => 'datetime'
	];

	protected $fillable = [
		'id_chambre',
		'date_maintenance',
		'description'
	];

	public function chambre()
	{
		return $this->belongsTo(Chambre::class, 'id_chambre');
	}
}
