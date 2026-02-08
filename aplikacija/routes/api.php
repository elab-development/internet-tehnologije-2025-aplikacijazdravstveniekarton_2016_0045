<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnalizaController;
use App\Http\Controllers\BolovanjeController;
use App\Http\Controllers\KorisnikController;
use App\Http\Controllers\PregledController;
use App\Http\Controllers\ReceptController;
use App\Http\Controllers\UputController;

Route::resource('analize', AnalizaController::class);
Route::resource('bolovanja', BolovanjeController::class);
Route::resource('korisnici', KorisnikController::class);
Route::resource('pregledi', PregledController::class);
Route::resource('recepti', ReceptController::class);
Route::resource('uputi', UputController::class);

Route::get('korisnici/{id}/analize', [KorisnikController::class, 'analize']);
Route::get('korisnici/{id}/bolovanja', [KorisnikController::class, 'bolovanja']);
Route::get('korisnici/{id}/pregledi', [KorisnikController::class, 'pregledi']);
Route::get('korisnici/{id}/recepti', [KorisnikController::class, 'recepti']);
Route::get('korisnici/{id}/uputi', [KorisnikController::class, 'uputi']);



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
