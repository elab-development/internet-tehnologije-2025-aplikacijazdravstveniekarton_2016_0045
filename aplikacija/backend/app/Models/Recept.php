<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recept extends Model
{
    /** @use HasFactory<\Database\Factories\ReceptFactory> */
    use HasFactory;

    protected $fillable=[
        'user_id',
        'lekovi',
        'datumIzdavanja',
        'izdaoLekar'
        
    ];
    function user(){
        return $this->belongsTo(User::class);
    }
}
