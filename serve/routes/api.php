<?php
use App\Http\Controllers\CartillasController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Cartillas
Route::get('/cartillas',[CartillasController::class,'index']);
Route::put('use')

Route::apiResource("user", UserController::class);
Route::get('user/pic/{id}', [UserController::class, 'getPic']);
Route::put('user/able/{id}', [UserController::class, 'able']);
Route::get('user/getProfessors/{id}', [UserController::class, 'getProfessor']);