<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reservation', function (Blueprint $table) {
            $table->id('id_reservation'); // Clé primaire auto-incrémentée
            $table->unsignedBigInteger('id_client'); // Clé étrangère vers la table client
            $table->enum('statut', ['en attente', 'confirmee', 'annulee']);
            $table->date('date_debut');
            $table->date('date_fin');
            $table->integer('nombre_personnes');
            $table->integer('nombre_bebes');
            $table->integer('nombre_enfants');
            $table->tinyInteger('nombre_chambre')->unsigned();
            $table->enum('buffet', ['matin', 'nuit', 'matin et nuit', 'none'])->nullable();
            $table->timestamps(); // Ajoute les colonnes created_at et updated_at

            // Définir la clé étrangère
            $table->foreign('id_client')
                ->references('id_client')
                ->on('client')
                ->onDelete('cascade');
        });

        // Ajouter une contrainte CHECK pour limiter le nombre de chambres
        DB::statement('ALTER TABLE reservation ADD CONSTRAINT check_nombre_chambre CHECK (nombre_chambre <= 32)');
    }

    public function down(): void
    {
        // Supprimer la contrainte CHECK avant de supprimer la table
        DB::statement('ALTER TABLE reservation DROP CONSTRAINT check_nombre_chambre');
        Schema::dropIfExists('reservation');
    }
};