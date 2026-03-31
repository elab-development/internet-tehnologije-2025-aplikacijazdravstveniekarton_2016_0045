<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bolovanje extends Model
{
    /** @use HasFactory<\Database\Factories\BolovanjeFactory> */
    use HasFactory;

protected $fillable=[
        'user_id',
        'datumOd',
        'datumDo',
        'dijagnoza',
        'izdaoLekar'
    ];

function user(){
        return $this->belongsTo(User::class);
    }
}
