<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class ConsultaspdfController extends Controller
{
 public function indexgrapciudadpdf()
    {
        $grapciudad = DB::select('SELECT p.id ,p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.nombre AS nombre_madre, m.apellidos, c.ciudad AS ciudad_pertenencia FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN ciudades c ON m.id_ciudades = c.id;');
        $pdf = PDF::loadView('Grapciudadpdf', ['grapciudad' => $grapciudad]);
        $pdf->setPaper('A4', 'landscape');
        $pdf->setOption('footer-html', view('footer'));
        return $pdf->stream();
    }

    public function indexgrapcentropdf()
    {
        $grapcentro = DB::select('SELECT p.id AS id_paciente, p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.id AS id_madre, m.nombre AS nombre_madre, m.apellidos, c_centros.nombre AS nombre_centro FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN cartillas c ON p.id = c.id_pacientes JOIN centros c_centros ON c.id_centros = c_centros.id;');
        $pdf = PDF::loadView('Grapcentropdf', ['grapcentro' => $grapcentro]);
        $pdf->setPaper('A4', 'landscape');
        $pdf->setOption('footer-html', view('footer'));
        return $pdf->stream();
    }

public function indexgraprescentropdf()
{
    $grapresulcentro = DB::select('SELECT p.id AS id_paciente, p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.id AS id_madre, m.nombre AS nombre_madre, m.apellidos, r.resultado, r.fecha_resultado, ce.id AS id_centro, ce.nombre AS nombre_centro FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN cartillas ca ON p.id = ca.id_pacientes JOIN centros ce ON ca.id_centros = ce.id JOIN resultados r ON ca.id = r.id_cartillas;');
    $pdf = PDF::loadView('Grapresulcentropdf', ['graprescentro' => $grapresulcentro]);
    $pdf->setPaper('A4', 'landscape');
    $pdf->setOption('footer-html', view('footer'));
    return $pdf->stream();
}
public function indexgrapresciudadpdf()
{
    $grapresulciudad = DB::select('SELECT p.id AS id_paciente, p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.id AS id_madre, m.nombre AS nombre_madre, m.apellidos AS apellidos_madre, r.resultado,r.fecha_resultado, c.ciudad AS ciudad_pertenencia FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN cartillas ca ON p.id = ca.id_pacientes JOIN ciudades c ON m.id_ciudades = c.id JOIN resultados r ON ca.id = r.id_cartillas;');
    $pdf = PDF::loadView('Grapresulciudadpdf', ['grapresulciudad' => $grapresulciudad]);
    $pdf->setPaper('A4', 'landscape');
    $pdf->setOption('footer-html', view('footer'));
    return $pdf->stream();
}
public function casostotales()
{
    $resultados = DB::table('Resultados')->get();

    $pdf = PDF::loadView('Resultadostotapdf', ['resultadostota' => $resultados]);

    $pdf->setPaper('A4', 'landscape');
    $pdf->setOption('footer-html', view('footer'));
    return $pdf->stream();
}
}
