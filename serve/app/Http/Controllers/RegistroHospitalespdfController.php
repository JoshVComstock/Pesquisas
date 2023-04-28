<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\PDF;
use Illuminate\Support\Facades\DB;

class RegistroHospitalespdfController extends Controller
{
    public function indexregistrohospitalespdf()
    {
        $Registro_hospitales = DB::select('SELECT r.id, r.hora, r.fecha, r.cod_tarjeta, r.cantidad_recibida, r.cantidad_entregada, c.nombre as nombre_centro, r.entregado_por, r.telefono, e.nombre as nombre_red, r.recibido_por FROM Registro_hospitales r JOIN Centros c ON r.id_centros = c.id JOIN Redes e ON r.id_redes = e.id');

        $pdf = PDF::loadView('Registrohospitales', ['Registrohospitales' => $Registro_hospitales]);

        $pdf->setPaper('A4', 'landscape');
        $pdf->setOption('footer-html', view('footer'));
        return $pdf->stream();
    }
}
