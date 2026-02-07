<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recept extends Model
{
    /** @use HasFactory<\Database\Factories\ReceptFactory> */
    use HasFactory;

    protected $fillable=[
        'idRecepta',
        'lekovi',
        'datumIzdavanja',
        'izdaoLekar'
        
    ];
    function korisnik(){
        return $this->belongsTo(Korisnik::class);
    }
}
