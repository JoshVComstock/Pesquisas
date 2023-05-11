<?php

use App\Http\Controllers\cartillapdfController;
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
use App\Http\Controllers\ResultsController;
// pdf
use App\Http\Controllers\ciudadpdfController;
use App\Http\Controllers\Provinciapdfcontroller;
use App\Http\Controllers\Centropdfcontroller;
use App\Http\Controllers\ConsultasController;
use App\Http\Controllers\ConsultaspdfController;
use App\Http\Controllers\LaboratoriopdfController;
use App\Http\Controllers\Municipiospdfcontroller;
use App\Http\Controllers\PacientepffController;
use App\Http\Controllers\PacientesController;
use App\Http\Controllers\RedespdfController;
use App\Http\Controllers\RegistroHospitalespdfController;
use App\Http\Controllers\RegistroProvinciaspdfController;
use App\Http\Controllers\ResultadosController;
use GuzzleHttp\Middleware;

Route::post('register', [UserController::class, 'register']);
Route::delete('register/{id}', [UserController::class, 'deploy']);
Route::post('login', [UserController::class, 'login']);
Route::get('registeruser', [UserController::class, 'register']);

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
Route::PUT('/provincias/{id}', [ProvinciasController::class, 'update']);
Route::delete('/provincias/{id}', [ProvinciasController::class, 'destroy']);


Route::get('/registro_provincias', [Registro_provinciasController::class, 'index']);
Route::put('/registro_provincias/{id}', [Registro_provinciasController::class, 'update']);
Route::post('/registro_provincias', [Registro_provinciasController::class, 'store']);
Route::delete('/registro_provincias/{id}', [Registro_provinciasController::class, 'destroy']);

Route::get('/registro_hospitales', [Registro_hospitalesController::class, 'index']);
Route::post('/registro_hospitales', [Registro_hospitalesController::class, 'store']);
Route::delete('/registro_hospitales/{id}', [Registro_hospitalesController::class, 'destroy']);

Route::get('/control_filtros', [Control_filtrosController::class, 'index']);
Route::post('/control_filtros', [Control_filtrosController::class, 'store']);
Route::delete('/control_filtros/{id}', [Control_filtrosController::class, 'destroy']);

Route::get('/resultados', [ResultadosController::class, 'index']);
Route::post('/resultados', [ResultadosController::class, 'store']);
Route::delete('/resultados/{id}', [ResultadosController::class, 'destroy']);

Route::get('/pacientes', [PacientesController::class, 'index']);
Route::post('/pacientes', [PacientesController::class, 'store']);
Route::delete('/pacientes/{id}', [PacientesController::class, 'destroy']);




Route::get('/cartillas', [CartillasController::class, 'index']);
Route::post('/cartillas', [CartillasController::class, 'store']);

Route::post('/resulst', [ResultsController::class, 'results']);
Route::get('/pacientes', [PacientesController::class, 'index']);
Route::get('/usuarios', [UserController::class, 'mostrarusu']);
Route::get('Ciudades-pdf', [ciudadpdfController::class, 'indexciudadpdf']);
Route::get('cartilla-pdf',[cartillapdfController::class,'indexcartillapdf']);
Route::get('Provincias-pdf',[Provinciapdfcontroller::class,'indexprovinciapdf']);
Route::get('Centros-pdf',[Centropdfcontroller::class,'indexcentropdf']);
Route::get('Municipios-pdf',[Municipiospdfcontroller::class,'indexmunicipiopdf']);
Route::get('RegistroH-pdf',[RegistroHospitalespdfController::class,'indexregistrohospitalespdf']);
Route::get('RegistroP-pdf',[RegistroProvinciaspdfController::class,'indexregistroprovinciaspdf']);
Route::get('Laboratorio-pdf',[LaboratoriopdfController::class,'indexlaboratoriopdf']);
Route::get('Redes-pdf',[RedespdfController::class,'indexredespdf']);
Route::get('Pacientes-pdf',[PacientepffController::class,'indexpacientepdfcontroller']);


Route::get('/consultasresultadocentro', [ConsultasController::class, 'resultadocentro']);
Route::get('/consultasresultadociudad', [ConsultasController::class, 'resultadociudad']);
Route::get('/consultasciudads', [ConsultasController::class, 'porciudad']);
Route::get('/consultascentro', [ConsultasController::class, 'porcentro']);


Route::get('Grapciudad-pdf', [ConsultaspdfController::class, 'indexgrapciudadpdf']);
Route::get('Grapcentro-pdf', [ConsultaspdfController::class, 'indexgrapcentropdf']);
Route::get('Grapresultadocentro-pdf', [ConsultaspdfController::class, 'indexgraprescentropdf']);
Route::get('Grapresultadociudad-pdf', [ConsultaspdfController::class, 'indexgrapresciudadpdf']);
Route::get('Casostotales-pdf', [ConsultaspdfController::class, 'casostotales']);
Route::get('Dinamico-pdf', [ConsultaspdfController::class, 'selectDinamico']);
Route::get('Dinamico2-pdf', [ConsultaspdfController::class, 'selectDinamico2']);

Route::post('selected', [ConsultaspdfController::class, 'selectDinamicoa']);





