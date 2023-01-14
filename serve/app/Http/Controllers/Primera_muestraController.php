<?php

namespace App\Http\Controllers;
use App\Models\Primera_muestra;
use Illuminate\Http\Request;

class Primera_muestraController extends Controller
{
    public function index()
    {
        return Primera_muestra::all();
    }
    public function store(Request $request)
    {
        $muestra=new Primera_muestra();
        $muestra->id_pacientes=$request->id_pacientes;
        $muestra->edad_gestion=$request->edad_gestion;
        $muestra->fecha_muestra=$request->fecha_muestra;
        $muestra->hora_muestra=$request->hora_muestra;
        $muestra->id_centros=$request->id_centros;
        $muestra->id_laboratorios=$request->id_laboratorios;
        $muestra->save();
        return $muestra;
    }
    public function update(Request $request, $id)
    {
        $muestra=Primera_muestra::find($id);
        $muestra->id_pacientes=$request->id_pacientes;
        $muestra->edad_gestion=$request->edad_gestion;
        $muestra->fecha_muestra=$request->fecha_muestra;
        $muestra->hora_muestra=$request->hora_muestra;
        $muestra->id_centros=$request->id_centros;
        $muestra->id_laboratorios=$request->id_laboratorios;
        $muestra->save();
        return $muestra;
    }
    public function destroy($id)
    {
        return Primera_muestra::destroy($id);
    }
}
