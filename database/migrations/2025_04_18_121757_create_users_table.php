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
        Schema::create('users', function (Blueprint $table) {
            $table->integer('id_user', true);
            $table->string('nom', 100)->nullable();
            $table->string('prenom', 100)->nullable();
            $table->enum('role', ['admin', 'client', 'employe'])->nullable();
            $table->string('email', 100)->nullable();
            $table->string('tel', 20)->nullable();
            $table->string('motDePasse')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
