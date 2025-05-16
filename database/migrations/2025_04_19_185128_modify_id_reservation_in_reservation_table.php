<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
public function up(): void
{
    Schema::table('reservation', function (Blueprint $table) {
        $table->bigIncrements('id_reservation')->change(); // تعديل الحقل ليصبح Auto Increment
    });
}

public function down(): void
{
    Schema::table('reservation', function (Blueprint $table) {
        $table->unsignedBigInteger('id_reservation')->change(); // إعادة الحقل إلى حالته السابقة
    });
}
};
