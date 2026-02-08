<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AnalizaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
        {return [

'idAnalize'=>$this->idAnalize,
 'rezultat'=>$this->rezultat,
 'datumAnalize'=>$this->datumAnalize,
 'izdaoLekar'=>$this->izdaoLekar,

        ];
                                       
                                        
                                        
    
}
}