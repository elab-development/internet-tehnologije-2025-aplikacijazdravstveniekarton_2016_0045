<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BolovanjeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[

  'datumOd'=>$this->datumOd,
'datumDo'=>$this->datumDo,
'dijagnoza'=>$this->dijagnoza,
'izdaoLekar'=>$this->izdaoLekar,
        ];
    }
}
