<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Uput extends Model
{
    /** @use HasFactory<\Database\Factories\UputFactory> */
    use HasFactory;

    protected $fillable=[
        'user_id',
        'uputZa',
        'datumUputa',
        'izdaoLekar',
        'korisnik_id'
    ];
    function user(){
        return $this->belongsTo(User::class);
    }
}
