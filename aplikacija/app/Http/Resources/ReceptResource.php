<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReceptResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
'idRecepta'=>$this->idRecepta,
                                       'lekovi'=>$this->lekovi,
                                       'datumIzdavanja'=>$this->datumIzdavanja,
                                        'izdaoLekar'=>$this->izdaoLekar,
        ];
    }
}
