<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Analiza extends Model
{
    /** @use HasFactory<\Database\Factories\AnalizaFactory> */
    use HasFactory;

protected $fillable=[
        'id',
        'rezultat',
        'datumAnalize',
        'izdaoLekar'
    ];


    function korisnik(){
        return $this->belongsTo(Korisnik::class);
    }
}
