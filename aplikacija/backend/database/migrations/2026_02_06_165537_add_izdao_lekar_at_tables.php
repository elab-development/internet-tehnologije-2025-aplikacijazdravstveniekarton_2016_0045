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
            
         $table->string('izdaoLekar');
        });
         Schema::table('analizas', function (Blueprint $table) {
            
         $table->string('izdaoLekar');
        });
         Schema::table('bolovanjes', function (Blueprint $table) {
            
         $table->string('izdaoLekar');
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
