<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use App\Models\Cartillas;
use Illuminate\Http\Request;

class cartillapdfController extends Controller
{
    public function indexcartillapdf()
    {
        $cartilla = DB::select("SELECT m.nombre as madre, m.apellidos,m.ci ,p.nombre,p.ap_paterno,c.codigo_barras,c.fecha_toma_muestra
        from madres as m,pacientes as p, cartillas as c 
        where c.id_pacientes=p.id and p.id_madres=m.id
       ");
        $pdf = PDF::loadView('cartilla', ['cartilla' => $cartilla]);
        return $pdf->stream();
    }
}
