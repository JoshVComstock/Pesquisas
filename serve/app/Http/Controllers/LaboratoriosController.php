<?php

namespace App\Http\Controllers;
use App\Models\Laboratorios;
use Illuminate\Http\Request;

class LaboratoriosController extends Controller
{
    public function index()
    {
        return Laboratorios::all();
    }
    public function store(Request $request)
    {
        $laboratorio=new Laboratorios();
        $laboratorio->nombre=$request->nombre;
        $laboratorio->direccion=$request->direccion;
        $laboratorio->telefono=$request->telefono;
        $laboratorio->id_centros=$request->id_centros;
        $laboratorio->id_ciudades=$request->id_ciudades;
        $laboratorio->id_redes=$request->id_redes;
        $laboratorio->save();
        return $laboratorio;
    }
    public function update(Request $request, $id)
    {
        $laboratorio=Laboratorios::find($id);
        $laboratorio->nombre=$request->nombre;
        $laboratorio->direccion=$request->direccion;
        $laboratorio->telefono=$request->telefono;
        $laboratorio->id_centros=$request->id_centros;
        $laboratorio->id_ciudades=$request->id_ciudades;
        $laboratorio->id_redes=$request->id_redes;
        $laboratorio->save();
        return $laboratorio;
    }
    public function destroy($id)
    {
        return Laboratorios::destroy($id);
    }
}
