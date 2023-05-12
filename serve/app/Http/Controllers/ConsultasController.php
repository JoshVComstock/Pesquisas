<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ConsultasController extends Controller
{
    public function porciudad()
    {
        return DB::select('SELECT p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.nombre AS nombre_madre, m.apellidos, c.ciudad AS ciudad_pertenencia FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN ciudades c ON m.id_ciudades = c.id;');
    }

    public function porcentro()
    {
        return DB::select('SELECT p.id AS id_paciente, p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.id AS id_madre, m.nombre AS nombre_madre, m.apellidos, c_centros.nombre AS nombre_centro FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN cartillas c ON p.id = c.id_pacientes JOIN centros c_centros ON c.id_centros = c_centros.id;');
    }
    public function resultadocentro()
    {
        return DB::select('SELECT p.id AS id_paciente, p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.id AS id_madre, m.nombre AS nombre_madre, m.apellidos, r.resultado, r.fecha_resultado, ce.id AS id_centro, ce.nombre AS nombre_centro FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN cartillas ca ON p.id = ca.id_pacientes JOIN centros ce ON ca.id_centros = ce.id JOIN resultados r ON ca.id = r.id_cartillas;');
    }
    public function resultadociudad()
    {
        return DB::select('SELECT p.id AS id_paciente, p.nombre AS nombre_paciente, p.ap_paterno, p.ap_materno, m.id AS id_madre, m.nombre AS nombre_madre, m.apellidos AS apellidos_madre, r.resultado, c.ciudad AS ciudad_pertenencia FROM pacientes p JOIN madres m ON p.id_madres = m.id JOIN cartillas ca ON p.id = ca.id_pacientes JOIN ciudades c ON m.id_ciudades = c.id JOIN resultados r ON ca.id = r.id_cartillas;');
    }

    public function selectDinamicoa(Request $request)
    {
        /*
        {
        "columnas": ["p.nombre as paciente","p.ap_paterno","p.ap_materno","p.sexo","p.fecha_nacimiento","p.hora_nacimiento","c.codigo_barras","c.fecha_toma_muestra","c.nacimiento_termino","c.edad_gestional_semanas"]

                tablas: ["cartillas as c", "pacientes as p"]
    }
            */
        $tablas = implode(", ", $request->tablas);
        $columnas = implode(", ", $request->columnas);
        $consulta = DB::select("SELECT $columnas FROM $tablas WHERE c.id_pacientes = p.id");
        return $consulta;

    }
}
