<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class MadrepdfControllerr extends Controller
{
    public function indexmadrepdf()
    {
        $Madres = DB::table('ciudades')->get();

        $pdf = PDF::loadView('Madres', ['Madres' => $Madres]);

        $pdf->setPaper('A4', 'landscape');
        $pdf->setOption('footer-html', view('footer'));
        return $pdf->stream();
    }
}
