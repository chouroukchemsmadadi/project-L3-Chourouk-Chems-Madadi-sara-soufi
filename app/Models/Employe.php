<?php
namespace App\Models;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Tymon\JWTAuth\Contracts\JWTSubject; // 🔥 importer JWTSubject
    
    class Employe extends Model
    {
        use HasFactory;
        public $timestamps = false; // <- Ajoute cette ligne
        protected $table = 'employe'; // nom de la table (si pas "employees")
    
        protected $primaryKey = 'id_employe'; // clé primaire personnalisée
    
        public $incrementing = true; // id_employe est AUTO_INCREMENT
    
        protected $keyType = 'int'; // type de la clé primaire
    
        protected $fillable = [
            'id_user',
            'salaire',
            'role',
        ];
    
        /**
         * 🔁 Relation avec User (1 employé appartient à 1 utilisateur)
         */
       
    
    

    public function user()
    {
        return $this->belongsTo(User::class, 'id_employe', 'id_user');
    }

    public function services()
    {
        return $this->hasMany(Service::class, 'id_employe');
    }

    }