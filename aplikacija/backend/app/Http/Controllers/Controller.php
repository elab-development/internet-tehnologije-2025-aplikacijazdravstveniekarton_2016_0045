<?php

namespace App\Http\Controllers;
use OpenApi\Attributes as OA;

#[
    OA\Info(
        version: "1.0.0",
        title: "Moj Laravel API",
        description: "Dokumentacija za moj React/Laravel projekat"
    ),
    OA\Server(
        url: 'http://localhost:8000/api',
        description: 'Lokalni razvojni server'
    )
]

abstract class Controller
{
    //
}
