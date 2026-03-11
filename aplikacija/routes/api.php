<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AnalizaController;
use App\Http\Controllers\UputController;
use App\Http\Controllers\ReceptController;
use App\Http\Controllers\PregledController;
use App\Http\Controllers\BolovanjeController;
use App\Http\Controllers\API\AuthController;





Route::post('/login', [AuthController::class, 'login']);


Route::group(['middleware'=>['auth:sanctum']], function(){
    Route::post('/register', [AuthController::class, 'register']);
    Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::delete('/userdelete/{id}', [UserController::class, 'destroy']);
Route::put('/userupdate/{id}', [UserController::class, 'update']);
Route::get('/korisnikoveanalize/{id}',[AnalizaController::class, 'korisnikoveanalize'] );
Route::get('/korisnikovabolovanja/{id}',[BolovanjeController::class, 'korisnikovabolovanja'] );
Route::get('/korisnikovipregledi/{id}',[PregledController::class, 'korisnikovipregledi'] );
Route::get('/korisnikovirecepti/{id}',[ReceptController::class, 'korisnikovirecepti'] );


Route::get('/analizas', [AnalizaController::class, 'index']);
Route::get('/analizas/{id}', [AnalizaController::class, 'show']);
Route::post('/addanaliza', [AnalizaController::class, 'addanaliza']);

Route::get('/uputs', [UputController::class, 'index']);
Route::get('/uputs/{id}', [UputController::class, 'show']);
Route::post('/adduput', [UputController::class, 'adduput']);

Route::get('/recepts', [ReceptController::class, 'index']);
Route::get('/recepts/{id}', [ReceptController::class, 'show']);
Route::post('/addrecept', [ReceptController::class, 'addrecept']);

Route::get('/bolovanjes', [BolovanjeController::class, 'index']);
Route::get('/bolovanjes/{id}', [BolovanjeController::class, 'show']);
Route::post('/addbolovanje', [BolovanjeController::class, 'addbolovanje']);

Route::get('/pregleds', [PregledController::class, 'index']);
Route::get('/pregleds/{id}', [PregledController::class, 'show']);
Route::post('/addpregled', [PregledController::class, 'addpregled']);

Route::post('/logout', [AuthController::class, 'logout']);

    });