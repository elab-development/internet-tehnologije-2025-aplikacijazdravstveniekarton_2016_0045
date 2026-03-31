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
                                        'id'=>$this->resource->id,            
                                        'ime'=>$this->resource->ime,
                                        'prezime'=>$this->resource->prezime,
                                        'email'=>$this->resource->email,
                                        'adresa'=>$this->resource->adresa,
                                        'brojTelefona'=>$this->resource->brojTelefona,
                                        'uloga'=>$this->resource->uloga,
                                        'datumRodjenja'=>$this->resource->datumRodjenja, 
        ];
    }
}
