<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class PacientepffController extends Controller
{
    public function indexpacientepdfcontroller()
    {
        $Pacientes = DB::select("SELECT p.id,p.nombre,p.ap_paterno,p.ap_materno,p.sexo,m.nombre as madre,m.telefono1,m.telefono2 FROM madres as m, pacientes as p WHERE p.id_madres=m.id");

        $pdf = PDF::loadView('Pacientespdf', ['Pacientespdf' => $Pacientes]);

        $pdf->setPaper('A4', 'landscape');
        $pdf->setOption('footer-html', view('footer'));
        return $pdf->stream();
    }
}
