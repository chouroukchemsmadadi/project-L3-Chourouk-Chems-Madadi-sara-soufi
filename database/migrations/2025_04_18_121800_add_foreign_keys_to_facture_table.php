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
        Schema::table('facture', function (Blueprint $table) {
            $table->foreign(['id_client'], 'facture_ibfk_1')->references(['id_client'])->on('client')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['id_reservation'], 'facture_ibfk_2')->references(['id_reservation'])->on('reservation')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('facture', function (Blueprint $table) {
            $table->dropForeign('facture_ibfk_1');
            $table->dropForeign('facture_ibfk_2');
        });
    }
};
