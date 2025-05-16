<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EquipementChambre
 * 
 * @property int $id_equipement
 * @property int $id_chambre
 * @property string $nom_equipement
 * @property int $quantite
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Chambre $chambre
 *
 * @package App\Models
 */
class EquipementChambre extends Model
{
	protected $table = 'equipement_chambre';
	protected $primaryKey = 'id_equipement';

	protected $casts = [
		'id_chambre' => 'int',
		'quantite' => 'int'
	];

	protected $fillable = [
		'id_chambre',
		'nom_equipement',
		'quantite'
	];

	public function chambre()
	{
		return $this->belongsTo(Chambre::class, 'id_chambre');
	}
}
