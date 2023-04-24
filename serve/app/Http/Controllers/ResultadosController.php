<?php

namespace App\Http\Controllers;
use App\Models\Resultados;
use Illuminate\Http\Request;

class ResultadosController extends Controller
{
    public function index()
    {
        return Resultados::all();
    }
    public function store(Request $request)
    {
        $resultados=new Resultados();
        $resultados->id_cartillas=$request->id_cartillas;
        $resultados->id_laboratorio=$request->id_laboratorio;
        $resultados->fecha_ingreso=$request->fecha_ingreso;
        $resultados->fecha_resultado=$request->fecha_resultado;
        $resultados->fecha_entregado=$request->fecha_entregado;
        $resultados->resultado=$request->resultado;
        $resultados->metodo=$request->metodo;
        $resultados->valor_resultado=$request->valor_resultado;
        $resultados->valor_referencia=$request->valor_referencia;
        $resultados->observaciones=$request->observaciones;
        $resultados->save();
        return $resultados;
    }
    public function update(Request $request, $id)
    {
        $resultados=Resultados::find($id);
        $resultados->id_cartillas=$request->id_cartillas;
        $resultados->id_laboratorio=$request->id_laboratorio;
        $resultados->fecha_ingreso=$request->fecha_ingreso;
        $resultados->fecha_resultado=$request->fecha_resultado;
        $resultados->fecha_entregado=$request->fecha_entregado;
        $resultados->resultado=$request->resultado;
        $resultados->metodo=$request->metodo;
        $resultados->valor_resultado=$request->valor_resultado;
        $resultados->valor_referencia=$request->valor_referencia;
        $resultados->observaciones=$request->observaciones;
        $resultados->save();
    }
    public function destroy($id)
    {
        return Resultados::destroy($id);
    }
}
