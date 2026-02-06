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
        Schema::create('bolovanjes', function (Blueprint $table) {
            $table->id('idBolovanja');
            $table->timestamps();
            $table->string('datumOd');
            $table->string('datumDo');
            $table->string('dijagnoza');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bolovanjes');
    }
};
