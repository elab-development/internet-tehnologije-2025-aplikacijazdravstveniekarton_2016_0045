<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PregledResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
'idPregleda'=>$this->idPregleda,
                                      'anamneza'=>$this->anamneza,
                                     'dijagnoza'=>$this->dijagnoza,
                                     'datumPregleda'=>$this->datumPregleda,
                                       'pregledaoLekar' =>$this->pregledaoLekar,
        ];
    }
}
