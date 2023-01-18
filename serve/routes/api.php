<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CiudadesController;
use App\Http\Controllers\CentrosController;
use App\Http\Controllers\RedesController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ciudades', [CiudadesController::class, 'index']);
Route::post('/ciudad', [CiudadesController::class, 'store']);
Route::delete('/ciudades/{id}', [CiudadesController::class, 'destroy']);

Route::get('/centros', [CentrosController::class, 'index']);
Route::post('/centros', [CentrosController::class, 'store']);
Route::delete('/centros/{id}', [CentrosController::class, 'destroy']);

Route::get('/redes', [RedesController::class, 'index']);
Route::post('/redes', [RedesController::class, 'store']);
Route::delete('/redes/{id}', [RedesController::class, 'destroy']);
