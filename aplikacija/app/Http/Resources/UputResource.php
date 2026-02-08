<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UputResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
'idUputa'=>$this->idUputa,
                                      'uputZa'=>$this->uputZa,
                                       'datumUputa'=>$this->datumUputa,
                                       'izdaoLekar'=>$this->izdaoLekar,
        ];
    }
}
