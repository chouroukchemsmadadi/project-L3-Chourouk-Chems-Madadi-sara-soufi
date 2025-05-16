<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('facture', function (Blueprint $table) {
            $table->id('id_facture'); // مفتاح أساسي Auto-Increment
            $table->unsignedBigInteger('id_reservation');
            $table->unsignedBigInteger('id_client');
            $table->decimal('montant_total', 10, 2);
            $table->date('date_facture');
            $table->enum('methode_paiement', ['Cash', 'Carte_visa', 'CIB', 'BaridiMob'])->nullable();
            $table->enum('statut', ['payee', 'non_payee'])->nullable();
            $table->decimal('prix_buffetmatin', 8, 2)->default(0);
            $table->decimal('prix_buffetnuit', 8, 2)->default(0);
             // 🟢 Ajoute ceci :
        $table->timestamps();



             // العلاقات (المفاتيح الخارجية)
             $table->foreign('id_reservation')->references('id_reservation')->on('reservation')->onDelete('cascade');
             $table->foreign('id_client')->references('id_client')->on('client')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('facture');
    }
};
