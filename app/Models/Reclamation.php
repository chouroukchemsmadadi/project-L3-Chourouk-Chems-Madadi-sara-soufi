<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Reclamation
 * 
 * @property int $id_reclamation
 * @property int $id_client
 * @property string $description
 * @property string $etat
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Client $client
 *
 * @package App\Models
 */
class Reclamation extends Model
{
	protected $table = 'reclamation';
	protected $primaryKey = 'id_reclamation';

	protected $casts = [
		'id_client' => 'int'
	];

	protected $fillable = [
		'id_client',
		'description',
		'etat'
	];

	public function client()
	{
		return $this->belongsTo(Client::class, 'id_client');
	}
}
