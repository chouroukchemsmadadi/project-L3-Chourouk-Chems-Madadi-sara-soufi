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
        Schema::table('reservation', function (Blueprint $table) {
            $table->foreign(['id_client'], 'reservation_ibfk_1')->references(['id_client'])->on('client')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['id_chambre'], 'reservation_ibfk_2')->references(['id_chambre'])->on('chambre')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('reservation', function (Blueprint $table) {
            $table->dropForeign('reservation_ibfk_1');
            $table->dropForeign('reservation_ibfk_2');
        });
    }
};
