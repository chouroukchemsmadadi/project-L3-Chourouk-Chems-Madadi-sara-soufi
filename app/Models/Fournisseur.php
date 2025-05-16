<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Fournisseur
 * 
 * @property int $id_f
 * @property string $etat
 * @property string $email
 * @property string $type_produit
 * @property string $nom_entreprise
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Fournisseur extends Model
{
	protected $table = 'fournisseur';
	protected $primaryKey = 'id_f';

	protected $fillable = [
		'etat',
		'email',
		'type_produit',
		'nom_entreprise'
	];
}
