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
        Schema::create('paiement', function (Blueprint $table) {
            $table->id('id_paiement');
            $table->foreignId('id_client')->constrained('clients')->onDelete('cascade');
            $table->foreignId('id_facture')->constrained('facture')->onDelete('cascade');
            $table->date('date_paiement');
          
            $table->timestamps();
            $table->enum('statut', ['effectué', 'en attente'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paiement');
    }
};
