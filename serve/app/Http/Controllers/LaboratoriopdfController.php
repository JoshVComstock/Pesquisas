<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
class LaboratoriopdfController extends Controller
{
    public function indexlaboratoriopdf()
    {
        $laboratorio = DB::select('SELECT l.id,l.nombre,l.direccion,l.telefono,p.provincia,p.id as idprovincia from laboratorios as l, provincias as p WHERE l.id_provincias=p.id');
        $pdf = PDF::loadView('laboratorio', ['laboratorio' => $laboratorio]);
        return $pdf->stream();
    }
}
