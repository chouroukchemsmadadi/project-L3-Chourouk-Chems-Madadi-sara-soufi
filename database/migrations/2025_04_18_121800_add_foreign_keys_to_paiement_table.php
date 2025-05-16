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
        Schema::table('paiement', function (Blueprint $table) {
            $table->foreign(['id_client'], 'paiement_ibfk_1')->references(['id_client'])->on('client')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['id_facture'], 'paiement_ibfk_2')->references(['id_facture'])->on('facture')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('paiement', function (Blueprint $table) {
            $table->dropForeign('paiement_ibfk_1');
            $table->dropForeign('paiement_ibfk_2');
        });
    }
};
