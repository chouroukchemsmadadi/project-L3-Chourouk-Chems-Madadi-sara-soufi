<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commande_service', function (Blueprint $table) {
            $table->integer('id_commande', true);
            $table->integer('id_client')->nullable()->index('id_client');
            $table->integer('id_service')->nullable()->index('id_service');
            $table->enum('statut', ['en attente', 'en cours', 'terminé'])->nullable();
            $table->date('date_commande')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commande_service');
    }
};
