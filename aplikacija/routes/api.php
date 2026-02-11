<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KorisnikController;
use App\Http\Controllers\AnalizaController;
use App\Http\Controllers\UputController;
use App\Http\Controllers\ReceptController;
use App\Http\Controllers\PregledController;
use App\Http\Controllers\BolovanjeController;


Route::get('/korisniks', [KorisnikController::class, 'index']);
Route::get('/korisniks/{id}', [KorisnikController::class, 'show']);
Route::delete('/korisnikdelete/{id}', [KorisnikController::class, 'destroy']);
Route::patch('/korisnikupdate/{id}', [KorisnikController::class, 'update']);
Route::get('/korisnikoveanalize/{id}',[AnalizaController::class, 'korisnikoveanalize'] );
Route::get('/korisnikovabolovanja/{id}',[BolovanjeController::class, 'korisnikovabolovanja'] );
Route::get('/korisnikovipregledi/{id}',[PregledController::class, 'korisnikovipregledi'] );
Route::get('/korisnikovirecepti/{id}',[ReceptController::class, 'korisnikovirecepti'] );


Route::get('/analizas', [AnalizaController::class, 'index']);
Route::get('/analizas/{id}', [AnalizaController::class, 'show']);

Route::get('/uputs', [UputController::class, 'index']);
Route::get('/uputs/{id}', [UputController::class, 'show']);

Route::get('/recepts', [ReceptController::class, 'index']);
Route::get('/recepts/{id}', [ReceptController::class, 'show']);

Route::get('/bolovanjes', [BolovanjeController::class, 'index']);
Route::get('/bolovanjes/{id}', [BolovanjeController::class, 'show']);
Route::post('/addbolovanje}', [BolovanjeController::class, 'addbolovanje']);

Route::get('/pregleds', [PregledController::class, 'index']);
Route::get('/pregleds/{id}', [PregledController::class, 'show']);
