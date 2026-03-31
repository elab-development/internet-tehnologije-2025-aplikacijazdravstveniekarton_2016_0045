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
         Schema::table('uputs', function (Blueprint $table) {
            
         $table->foreignId('korisnik_id');
        });
         Schema::table('analizas', function (Blueprint $table) {
            
         $table->foreignId('korisnik_id');
        });
         Schema::table('bolovanjes', function (Blueprint $table) {
            
         $table->foreignId('korisnik_id');
        });
        Schema::table('pregleds', function (Blueprint $table) {
            
         $table->foreignId('korisnik_id');
        });
        Schema::table('recepts', function (Blueprint $table) {
            
        $table->foreignId('korisnik_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
