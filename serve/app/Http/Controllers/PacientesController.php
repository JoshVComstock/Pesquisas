<?php

namespace App\Http\Controllers;

use App\Models\Pacientes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PacientesController extends Controller
{
    public function index()
    {
        return DB::select("SELECT p.id,p.nombre,p.ap_paterno,p.ap_materno,p.sexo,m.nombre as madre,m.telefono1,m.telefono2 FROM madres as m, pacientes as p WHERE p.id_madres=m.id");
    }
    public function show($id)
{
    $recurso = DB::select("SELECT p.id,p.nombre,p.ap_paterno,p.ap_materno,p.sexo,m.nombre as madre,m.telefono1,m.telefono2,m.direccion, p.fecha_nacimiento,p.hora_nacimiento, c.ciudad FROM madres as m, pacientes as p, ciudades as c WHERE p.id_madres=m.id and m.id_ciudades=c.id and p.id= ?", [$id]);
    return $recurso;
}

    public function store(Request $request)
    {
        $pacientes = new Pacientes();
        $pacientes->nombre = $request->nombre;
        $pacientes->ap_paterno = $request->ap_paterno;
        $pacientes->ap_materno = $request->ap_materno;
        $pacientes->sexo = $request->sexo;
        $pacientes->fecha_nacimiento = $request->fecha_nacimiento;
        $pacientes->hora_nacimiento = $request->hora_nacimiento;
        $pacientes->id_madres = $request->id_madres;
        $pacientes->save();
        return $pacientes;
    }
    public function update(Request $request, $id)
    {
        $pacientes = Pacientes::find($id);
        $pacientes->nombre = $request->nombre;
        $pacientes->ap_paterno = $request->ap_paterno;
        $pacientes->ap_materno = $request->ap_materno;
        $pacientes->sexo = $request->sexo;
        $pacientes->fecha_nacimiento = $request->fecha_nacimiento;
        $pacientes->hora_nacimiento = $request->hora_nacimiento;
        $pacientes->id_madres = $request->id_madres;
        $pacientes->save();
        return $pacientes;
    }
    public function destroy($id)
    {
        return Pacientes::destroy($id);
    }
}
