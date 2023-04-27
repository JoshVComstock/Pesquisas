<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
class Municipiospdfcontroller extends Controller
{
    public function indexmunicipiopdf()
    {
        $municipios =DB::select('SELECT m.id,m.municipio,p.id as idprovi,p.provincia FROM municipios as m, provincias as p WHERE m.id_provincias=p.id');

        $pdf = PDF::loadView('municipios', ['municipios' => $municipios]);
        return $pdf->stream();
    }
}
