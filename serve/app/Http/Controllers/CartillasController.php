<?php

namespace App\Http\Controllers;
use App\Models\Cartillas;
use Illuminate\Http\Request;

class CartillasController extends Controller
{
    public function index()
    {
        return Cartillas::all();
    }
    public function store(Request $request)
    {   $cartillas=new Cartillas();
        $cartillas->codigo_barras=$request->codigo_barras;
        $cartillas->primer_apellido=$request->primer_apellido;
        $cartillas->segundo_apellido=$request->segundo_apellido;
        $cartillas->nombre_bebe=$request->nombre_bebe;
        $cartillas->fecha_nacimiento=$request->fecha_nacimiento;
        $cartillas->fecha_toma_muestra=$request->fecha_toma_muestra;
        $cartillas->nacimiento_termino=$request->nacimiento_termino;
        $cartillas->edad_gestional=$request->edad_gestional;
        $cartillas->sexo=$request->sexo;
        $cartillas->muestra=$request->muestra;
        $cartillas->peso_nacimiento=$request->peso_nacimiento;
        $cartillas->transfusion=$request->transfusion;
        $cartillas->antibioticos=$request->antibioticos;
        $cartillas->ci=$request->ci;
        $cartillas->id_ciudades=$request->id_ciudades;
        $cartillas->id_centros=$request->id_centros;
        $cartillas->id_madres=$request->id_madres;
        $cartillas->save();
        return $cartillas;
    }
    public function update(Request $request, $id)
    {
        $cartillas= Cartillas::find($id);
        $cartillas->codigo_barras=$request->codigo_barras;
        $cartillas->primer_apellido=$request->primer_apellido;
        $cartillas->segundo_apellido=$request->segundo_apellido;
        $cartillas->nombre_bebe=$request->nombre_bebe;
        $cartillas->fecha_nacimiento=$request->fecha_nacimiento;
        $cartillas->fecha_toma_muestra=$request->fecha_toma_muestra;
        $cartillas->nacimiento_termino=$request->nacimiento_termino;
        $cartillas->edad_gestional=$request->edad_gestional;
        $cartillas->sexo=$request->sexo;
        $cartillas->muestra=$request->muestra;
        $cartillas->peso_nacimiento=$request->peso_nacimiento;
        $cartillas->transfusion=$request->transfusion;
        $cartillas->antibioticos=$request->antibioticos;
        $cartillas->ci=$request->ci;
        $cartillas->id_ciudades=$request->id_ciudades;
        $cartillas->id_centros=$request->id_centros;
        $cartillas->id_madres=$request->id_madres;
        $cartillas->save();
        return $cartillas;
    }
    public function destroy($id)
    {
        return Cartillas::destroy($id);
    }
}
