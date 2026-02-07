<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Uput extends Model
{
    /** @use HasFactory<\Database\Factories\UputFactory> */
    use HasFactory;

    protected $fillable=[
        'idUputa',
        'uputZa',
        'datumUputa',
        'izdaoLekar'
    ];
    function korisnik(){
        return $this->belongsTo(Korisnik::class);
    }
}
