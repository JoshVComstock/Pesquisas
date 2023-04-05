<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cartillas;
use Illuminate\Support\Facades\DB;
use App\Models\Madres;

class ResultsController extends Controller
{
    
    public function index()
    {
        //
    }
    public function Results(Request $request)
    {
        $carnetmadre=$request->ci;
        $codigo_barras=$request->codigo_barras;

            return DB::select("SELECT m.nombre as madre, m.apellidos,m.ci ,p.nombre,p.ap_paterno,c.codigo_barras,c.fecha_toma_muestra
             from madres as m,pacientes as p, cartillas as c 
             where c.id_pacientes=p.id and p.id_madres=m.id and c.codigo_barras=$codigo_barras and m.ci=$carnetmadre
            ");
        
    }
    public function show($id)
    {
        //
    }
    public function update(Request $request, $id)
    {
        //
    }
    public function destroy($id)
    {
        //
    }
}
