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
        Schema::create('korisnici', function (Blueprint $table) {
            $table->id('jmbg');
            $table->timestamps();
            $table->string('ime');
            $table->string('prezime');
            $table->string('adresa');
            $table->string('email');
            $table->date('datumRodjenja');
            $table->string('brojTelefona');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('korisnici');
    }
};
