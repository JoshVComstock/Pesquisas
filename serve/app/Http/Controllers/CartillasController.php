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
        $cartillas->fecha_toma_muestra=$request->fecha_toma_muestra;
        $cartillas->nacimiento_termino=$request->nacimiento_termino;
        $cartillas->edad_gestional_semanas=$request->edad_gestional_semanas;
        $cartillas->edad_gestional_dia=$request->edad_gestional_dia;
        $cartillas->muestra=$request->muestra;
        $cartillas->peso_nacimiento=$request->peso_nacimiento;
        $cartillas->transfusion=$request->transfusion;
        $cartillas->fecha=$request->fecha;
        $cartillas->antibioticos=$request->antibioticos;
        $cartillas->id_centros=$request->id_centros;
        $cartillas->save();
        return $cartillas;
    }
    public function update(Request $request, $id)
    {
        $cartillas= Cartillas::find($id);
        $cartillas->codigo_barras=$request->codigo_barras;
        $cartillas->fecha_toma_muestra=$request->fecha_toma_muestra;
        $cartillas->nacimiento_termino=$request->nacimiento_termino;
        $cartillas->edad_gestional_semanas=$request->edad_gestional_semanas;
        $cartillas->edad_gestional_dia=$request->edad_gestional_dia;
        $cartillas->muestra=$request->muestra;
        $cartillas->peso_nacimiento=$request->peso_nacimiento;
        $cartillas->transfusion=$request->transfusion;
        $cartillas->fecha=$request->fecha;
        $cartillas->antibioticos=$request->antibioticos;
        $cartillas->id_centros=$request->id_centros;
        $cartillas->save();
        return $cartillas;
    }
    public function destroy($id)
    {
        return Cartillas::destroy($id);
    }
}
