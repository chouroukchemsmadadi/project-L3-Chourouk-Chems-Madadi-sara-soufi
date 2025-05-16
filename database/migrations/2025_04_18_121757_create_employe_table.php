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
        Schema::create('employe', function (Blueprint $table) {
            $table->integer('id_employe')->primary();
            $table->decimal('salaire', 10)->nullable();
            $table->enum('role', ['res_garderie', 'res_spa', 'res_reception', 'res_servicechambre', 'res_restaurant'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employe');
    }
};
