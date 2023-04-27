<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class Centropdfcontroller extends Controller
{
    public function indexcentropdf()
    {
        $centros =DB::select('SELECT c.id, c.nombre,c.direccion,c.telefono,m.municipio,c.area,c.seguimiento_casos,c.contacto FROM municipios as m, centros as c WHERE c.id_municipios=m.id
        ');
        $pdf = PDF::loadView('centros', ['centros' => $centros]);
        return $pdf->stream();
    }
}




