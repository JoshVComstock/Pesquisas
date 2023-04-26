<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class ciudadpdfController extends Controller
{
    public function indexciudadpdf()
    {
        $ciudades = DB::table('ciudades')->get();
        $pdf = PDF::loadView('ciudad', ['ciudad' => $ciudades]);
        return $pdf->stream();
    }
}
