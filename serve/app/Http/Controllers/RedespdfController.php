<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
class RedespdfController extends Controller
{ 
    public function indexredespdf()
    {
        $Redes = DB::table('Redes')->get();

        $pdf = PDF::loadView('Redes', ['Redes' => $Redes]);
        return $pdf->stream();
    }
}

