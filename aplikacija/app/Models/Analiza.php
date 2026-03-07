<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Analiza extends Model
{
    /** @use HasFactory<\Database\Factories\AnalizaFactory> */
    use HasFactory;

protected $fillable=[
        
        'rezultat',
        'datumAnalize',
        'izdaoLekar',
        'user_id'
    ];


    function user(){
        return $this->belongsTo(User::class);
    }
}
