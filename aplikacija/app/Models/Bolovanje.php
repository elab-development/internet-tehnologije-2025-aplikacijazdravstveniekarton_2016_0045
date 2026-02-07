<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bolovanje extends Model
{
    /** @use HasFactory<\Database\Factories\BolovanjeFactory> */
    use HasFactory;

protected $fillable=[
        'idBolovanja',
        'datumOd',
        'datumDo',
        'dijagnoza',
        'izdaoLekar'
    ];

function korisnik(){
        return $this->belongsTo(Korisnik::class);
    }
}
