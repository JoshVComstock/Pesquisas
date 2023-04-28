<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\PDF;
use Illuminate\Support\Facades\DB;

class RegistroProvinciaspdfController extends Controller
{
    public function indexregistroprovinciaspdf()
    {
        $Registro_provincias = DB::select('SELECT r.id,r.hora, r.fecha, r.cod_tarjeta, r.cantidad_recibida, r.cantidad_entregada, c.nombre as nombre_centro, r.entregado_por, r.telefono, r.recibido_por FROM Registro_hospitales r JOIN Centros c ON r.id_centros = c.id
        ');

        $pdf = PDF::loadView('Registroprovincias', ['Registroprovincias' => $Registro_provincias]);

        $pdf->setPaper('A4', 'landscape');
        $pdf->setOption('footer-html', view('footer'));
        return $pdf->stream();
    }
}


