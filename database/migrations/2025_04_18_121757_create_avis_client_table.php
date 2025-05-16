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
        Schema::create('avis_client', function (Blueprint $table) {
            $table->integer('id_avis', true);
            $table->integer('id_client')->nullable()->index('id_client');
            $table->integer('id_reservation')->nullable()->index('id_reservation');
            $table->integer('note')->nullable();
            $table->text('commentaire')->nullable();
            $table->date('date_avis')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avis_client');
    }
};
