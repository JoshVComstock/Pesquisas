<?php

namespace App\Http\Controllers;
use App\Models\Seguimientos;
use Illuminate\Http\Request;

class SeguimientosController extends Controller
{
    public function index()
    {
        return Seguimientos::all();
    }
    public function store(Request $request)
    {
        $seguimiento=new Seguimientos();
        $seguimiento->id_cartillas=$request->id_cartillas;
        $seguimiento->nombre_paciente=$request->nombre_paciente;
        $seguimiento->fecha_notificacion=$request->fecha_notificacion;
        $seguimiento->edad=$request->edad;
        $seguimiento->sexo=$request->sexo;
        $seguimiento->prueba_alterada=$request->prueba_alterada;
        $seguimiento->fecha_nacimiento=$request->fecha_nacimiento;
        $seguimiento->fecha_toma_muestra=$request->fecha_toma_muestra;
        $seguimiento->fecha_ingreso_laboratorio=$request->fecha_ingreso_laboratorio;
        $seguimiento->fecha_proceso=$request->fecha_proceso;
        $seguimiento->id_centros=$request->id_centros;
        $seguimiento->id_municipios=$request->id_municipios;
        $seguimiento->nombre_madre=$request->nombre_madre;
        $seguimiento->direccion=$request->direccion;
        $seguimiento->telefono=$request->telefono;
        $seguimiento->fecha_atencion_caso=$request->fecha_atencion_caso;
        $seguimiento->formulario_referencia=$request->formulario_referencia;
        $seguimiento->formulario_contra_referencia=$request->formulario_contra_referencia;
        $seguimiento->observaciones=$request->observaciones;
        $seguimiento->save();
        return $seguimiento;
    }
    public function update(Request $request, $id)
    {
        $seguimiento=Seguimientos::find($id);
        $seguimiento->id_cartillas=$request->id_cartillas;
        $seguimiento->nombre_paciente=$request->nombre_paciente;
        $seguimiento->fecha_notificacion=$request->fecha_notificacion;
        $seguimiento->edad=$request->edad;
        $seguimiento->sexo=$request->sexo;
        $seguimiento->prueba_alterada=$request->prueba_alterada;
        $seguimiento->fecha_nacimiento=$request->fecha_nacimiento;
        $seguimiento->fecha_toma_muestra=$request->fecha_toma_muestra;
        $seguimiento->fecha_ingreso_laboratorio=$request->fecha_ingreso_laboratorio;
        $seguimiento->fecha_proceso=$request->fecha_proceso;
        $seguimiento->id_centros=$request->id_centros;
        $seguimiento->id_municipios=$request->id_municipios;
        $seguimiento->nombre_madre=$request->nombre_madre;
        $seguimiento->direccion=$request->direccion;
        $seguimiento->telefono=$request->telefono;
        $seguimiento->fecha_atencion_caso=$request->fecha_atencion_caso;
        $seguimiento->formulario_referencia=$request->formulario_referencia;
        $seguimiento->formulario_contra_referencia=$request->formulario_contra_referencia;
        $seguimiento->observaciones=$request->observaciones;
        $seguimiento->save();
        return $seguimiento;
    }
    public function destroy($id)
    {
        return Seguimientos::destroy($id);
    }
}
