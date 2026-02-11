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
        Schema::table('recepts', function (Blueprint $table) {
            $table->renameColumn('idRecepta', 'id');
     
        
        });
        Schema::table('analizas', function (Blueprint $table) {
            $table->renameColumn('idAnalize', 'id');
     
        
        });
        Schema::table('bolovanjes', function (Blueprint $table) {
            $table->renameColumn('idBolovanja', 'id');
     
        
        });
        Schema::table('korisniks', function (Blueprint $table) {
            $table->renameColumn('jmbg', 'id');
     
        
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
