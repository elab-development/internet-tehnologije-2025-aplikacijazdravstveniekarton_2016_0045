<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KorisnikResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
'jmbg'=>$this->jmbg,            
                                        'ime'=>$this->ime,
                                        'prezime'=>$this->prezime,
                                        'password'=>$this->password,
                                        'email'=>$this->email,
                                        'adresa'=>$this->adresa,
                                        'brojTelefona'=>$this->brojTelefona,
                                        'uloga'=>$this->uloga,
                                        'datumRodjenja'=>$this->datumRodjenja,
        ];
    }
}
