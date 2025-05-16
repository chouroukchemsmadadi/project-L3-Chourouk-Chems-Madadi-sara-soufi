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
        Schema::create('service', function (Blueprint $table) {
            $table->integer('id_service', true);
            $table->integer('id_employe')->nullable()->index('id_employe');
            $table->enum('type', ['garderie', 'spa', 'reception', 'servicechambre', 'restaurant'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service');
    }
};
