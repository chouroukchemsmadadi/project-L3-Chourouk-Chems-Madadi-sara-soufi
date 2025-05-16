<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('client', function (Blueprint $table) {
            $table->unsignedBigInteger('id_client')->primary(); // id_client comme clé primaire
            $table->string('nom_compte', 50)->default('paye');
            $table->string('code', 10)->default('1234');

            // Définir id_client comme clé étrangère de id_user dans la table users
            $table->foreign('id_client')
                ->references('id_user')
                ->on('users')
                ->onDelete('cascade') // Supprime le client si l'utilisateur est supprimé
                ->onUpdate('cascade'); // Met à jour la clé étrangère si id_user change
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('client');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'id_client', 'id_user');
    }
};