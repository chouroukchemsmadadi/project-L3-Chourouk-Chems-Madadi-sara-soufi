<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('chambre', function (Blueprint $table) {
            $table->integer('id_chambre')->primary();
            $table->enum('vue', ['Sejour Park View', 'Piscine View', 'Sejour Lake Vie', 'Parc view'])->nullable();
            $table->enum('type', ['Single', 'Double', 'Suite', 'Family'])->nullable();
            $table->decimal('prix', 10, 2)->nullable();
            $table->string('numero', 20)->nullable();
            $table->enum('statut', ['Libre', 'Occupée', 'Maintenance'])->nullable();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('chambre');
    }
};