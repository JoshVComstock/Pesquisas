<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class Provinciapdfcontroller extends Controller
{

    public function indexprovinciapdf()
    {
        $provincias = DB::select('SELECT p.id,p.provincia,c.ciudad,c.id as id_ciudades FROM provincias as p, ciudades as c WHERE p.id_ciudades=c.id;
        ');
        $pdf = PDF::loadView('provincia', ['provincia' => $provincias]);
        return $pdf->stream();
    }
}
