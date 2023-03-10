<?php

use App\Http\Controllers\CartillasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CiudadesController;
use App\Http\Controllers\CentrosController;
use App\Http\Controllers\RedesController;
use App\Http\Controllers\SeguimientosController;
use App\Http\Controllers\EnfermedadesController;
use App\Http\Controllers\LaboratoriosController;
use App\Http\Controllers\MunicipiosController;
use App\Http\Controllers\ProvinciasController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Registro_provinciasController;
use App\Http\Controllers\Registro_hospitalesController;
use App\Http\Controllers\Control_filtrosController;
use GuzzleHttp\Middleware;

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

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('registeruser', [UserController::class, 'Userregister']);

Route::group(['middleware' => ["auth:sanctum"]], function () {
    Route::get('users-profile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/ciudades', [CiudadesController::class, 'index']);
Route::post('/ciudades', [CiudadesController::class, 'store']);
Route::put('/ciudades/{id}', [CiudadesController::class, 'update']);
Route::delete('/ciudades/{id}', [CiudadesController::class, 'destroy']);

Route::get('/centros', [CentrosController::class, 'index']);
Route::post('/centros', [CentrosController::class, 'store']);
Route::put('/centros/{id}', [CentrosController::class, 'update']);
Route::delete('/centros/{id}', [CentrosController::class, 'destroy']);

Route::get('/redes', [RedesController::class, 'index']);
Route::post('/redes', [RedesController::class, 'store']);
Route::put('/redes/{id}', [RedesController::class, 'update']);
Route::delete('/redes/{id}', [RedesController::class, 'destroy']);

Route::get('/seguimientos', [SeguimientosController::class, 'index']);
Route::post('/seguimientos', [SeguimientosController::class, 'store']);
Route::put('/seguimientos/{id}', [SeguimientosController::class, 'update']);
Route::delete('/seguimientos/{id}', [SeguimientosController::class, 'destroy']);

Route::get('/enfermedades', [EnfermedadesController::class, 'index']);
Route::post('/enfermedades', [EnfermedadesController::class, 'store']);
Route::put('/enfermedades/{id}', [EnfermedadesController::class, 'update']);
Route::delete('/enfermedades/{id}', [EnfermedadesController::class, 'destroy']);

Route::get('/laboratorios', [LaboratoriosController::class, 'index']);
Route::put('/laboratorios/{id}', [LaboratoriosController::class, 'update']);
Route::post('/laboratorios', [LaboratoriosController::class, 'store']);
Route::delete('/laboratorios/{id}', [LaboratoriosController::class, 'destroy']);

Route::get('/municipios', [MunicipiosController::class, 'index']);
Route::put('/municipios/{id}', [MunicipiosController::class, 'update']);
Route::post('/municipios', [MunicipiosController::class, 'store']);
Route::delete('/municipios/{id}', [MunicipiosController::class, 'destroy']);

Route::get('/provincias', [ProvinciasController::class, 'index']);
Route::post('/provincias', [ProvinciasController::class, 'store']);
Route::put('/provincias/{id}', [ProvinciasController::class, 'update']);
Route::delete('/provincias/{id}', [ProvinciasController::class, 'destroy']);


Route::get('/registro_provincias', [Registro_provinciasController::class, 'index']);
Route::post('/registro_provincias', [Registro_provinciasController::class, 'store']);
Route::put('/registro_provincias/{id}', [Registro_provinciasController::class, 'update']);
Route::delete('/registro_provincias/{id}', [Registro_provinciasController::class, 'destroy']);

Route::get('/registro_hospitales', [Registro_hospitalesController::class, 'index']);
Route::post('/registro_hospitales', [Registro_hospitalesController::class, 'store']);
Route::delete('/registro_hospitales/{id}', [Registro_hospitalesController::class, 'destroy']);

Route::get('/control_filtros', [Control_filtrosController::class, 'index']);
Route::post('/control_filtros', [Control_filtrosController::class, 'store']);
Route::delete('/control_filtros/{id}', [Control_filtrosController::class, 'destroy']);

Route::get('/cartillas', [CartillasController::class, 'index']);
Route::post('/cartillas', [CartillasController::class, 'store']);