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
        Schema::create('reservation_chambre', function (Blueprint $table) {
            $table->integer('id_reservation'); // عمود id_reservation
            $table->integer('id_chambre'); // عمود id_chambre

            // إضافة المفتاح الأساسي المركب
            $table->primary(['id_reservation', 'id_chambre']);

            // إضافة المفاتيح الخارجية
            $table->foreign('id_reservation')
                ->references('id_reservation')
                ->on('reservation')
                ->onDelete('cascade');

            $table->foreign('id_chambre')
                ->references('id_chambre')
                ->on('chambre')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservation_chambre');
    }
};