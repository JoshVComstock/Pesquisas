<?php

namespace App\Http\Controllers;

use App\Models\Cartillas;
use App\Models\Madres;
use Illuminate\Http\Request;
use App\Models\Pacientes;
use Illuminate\Support\Facades\DB;

class CartillasController extends Controller
{
    public function index()
    {
        return DB::select('select m.nombre as madre, m.apellidos,m.ci ,p.nombre,p.ap_paterno,c.codigo_barras,c.fecha_toma_muestra from madres as m,pacientes as p, cartillas as c where c.id_pacientes=p.id and p.id_madres=m.id;
        ');
    }
    public function store(Request $request)
    {
        $madre = new Madres();
        $madre->nombre = $request->nombremadre;
        $madre->apellidos = $request->apellidos;
        $madre->ci = $request->ci;
        $madre->id_ciudades = $request->id_ciudades;
        $madre->direccion = $request->direccion;
        $madre->telefono1 = $request->telefono1;
        $madre->telefono2 = $request->telefono2;
        $madre->tratamiento_hipertiroidismo = $request->tratamiento_hipertiroidismo;
        $madre->tratamiento_hipotiroidismo = $request->tratamiento_hipotiroidismo;
        $madre->enfermedad = $request->enfermedad;
        $madre->detalle_direccion = $request->detalle_direccion;
        $madre->save();
        $pacientes=new Pacientes();
        $pacientes->nombre=$request->nombrepaciente;
        $pacientes->ap_paterno=$request->ap_paterno;
        $pacientes->ap_materno=$request->ap_materno;
        $pacientes->sexo=$request->sexo;
        $pacientes->fecha_nacimiento=$request->fecha_nacimiento;
        $pacientes->hora_nacimiento=$request->hora_nacimiento;
        $pacientes->id_madres=$madre->id;
        $pacientes->save();
        $cartillas = new Cartillas();
        $cartillas->codigo_barras = $request->codigo_barras;
        $cartillas->fecha_toma_muestra = $request->fecha_toma_muestra;
        $cartillas->nacimiento_termino = $request->nacimiento_termino;
        $cartillas->edad_gestional_semanas = $request->edad_gestional_semanas;
        $cartillas->edad_gestional_dia = $request->edad_gestional_dia;
        $cartillas->muestra = $request->muestra;
        $cartillas->peso_nacimiento = $request->peso_nacimiento;
        $cartillas->transfusion = $request->transfusion;
        $cartillas->fecha = $request->fecha;
        $cartillas->antibioticos = $request->antibioticos;
        $cartillas->id_centros = $request->id_centros;
        $cartillas->id_pacientes = $pacientes->id;
        $cartillas->save();
        return $cartillas;
    }
    public function update(Request $request, $id)
    {
        $cartillas = Cartillas::find($id);
        $cartillas->codigo_barras = $request->codigo_barras;
        $cartillas->fecha_toma_muestra = $request->fecha_toma_muestra;
        $cartillas->nacimiento_termino = $request->nacimiento_termino;
        $cartillas->edad_gestional_semanas = $request->edad_gestional_semanas;
        $cartillas->edad_gestional_dia = $request->edad_gestional_dia;
        $cartillas->muestra = $request->muestra;
        $cartillas->peso_nacimiento = $request->peso_nacimiento;
        $cartillas->transfusion = $request->transfusion;
        $cartillas->fecha = $request->fecha;
        $cartillas->antibioticos = $request->antibioticos;
        $cartillas->id_centros = $request->id_centros;
        $cartillas->id_pacientes = $request->id_pacientes;
        $cartillas->save();
        return $cartillas;
    }
    public function destroy($id)
    {
        return Cartillas::destroy($id);
    }
}
