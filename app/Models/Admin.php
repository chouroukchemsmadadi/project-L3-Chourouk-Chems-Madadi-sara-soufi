<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admin';
    protected $primaryKey = 'id_admin';

    public function user()
    {
        return $this->belongsTo(User::class, 'id_admin', 'id_user');
    }
}
