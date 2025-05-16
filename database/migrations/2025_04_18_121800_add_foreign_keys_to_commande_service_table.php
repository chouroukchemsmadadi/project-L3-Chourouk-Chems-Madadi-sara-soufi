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
        Schema::table('commande_service', function (Blueprint $table) {
            $table->foreign(['id_client'], 'commande_service_ibfk_1')->references(['id_client'])->on('client')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['id_service'], 'commande_service_ibfk_2')->references(['id_service'])->on('service')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('commande_service', function (Blueprint $table) {
            $table->dropForeign('commande_service_ibfk_1');
            $table->dropForeign('commande_service_ibfk_2');
        });
    }
};
