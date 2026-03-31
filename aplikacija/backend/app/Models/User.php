<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; 

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens,HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        
        'id',
        'ime',
        'prezime',
        'adresa',
        'email',
        'datumRodjenja',
        'brojTelefona',
        'uloga',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
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

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
