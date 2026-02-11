<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Korisnik;
use Laravel\Sanctum\HasApiTokens;

class Korisnik extends Model
{
    /** @use HasFactory<\Database\Factories\KorisnikFactory> */
    use HasFactory;

protected $fillable=[
        'id',
        'ime',
        'prezime',
        'adresa',
        'email',
        'datumRodjenja',
        'brojTelefona',
        'uloga',
        'password'


    ];
    protected $hidden = [
        'password'
        
    ];

    function analize(){
        return $this->hasMany(Analiza::class);
    }
    function bolovanja(){
        return $this->hasMany(Bolovanje::class);
    }
    function pregledi(){
        return $this->hasMany(Pregled::class);
    }
    function recepti(){
        return $this->hasMany(Recept::class);
    }
    function uputi(){
        return $this->hasMany(Uput::class);
    }


}
