<?php

namespace App\Http\Controllers;
use App\Models\Laboratorios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LaboratoriosController extends Controller
{
    public function index()
    {
        return DB::select('SELECT l.id,l.nombre,l.direccion,l.telefono,p.provincia,p.id as idprovincia from laboratorios as l, provincias as p WHERE l.id_provincias=p.id');
    }
    public function store(Request $request)
    {
        $laboratorio=new Laboratorios();
        $laboratorio->nombre=$request->nombre;
        $laboratorio->direccion=$request->direccion;
        $laboratorio->telefono=$request->telefono;
        $laboratorio->id_provincias=$request->id_provincias;
        $laboratorio->save();
        return $laboratorio;
    }
    public function update(Request $request, $id)
    {
        $laboratorio=Laboratorios::find($id);
        $laboratorio->nombre=$request->nombre;
        $laboratorio->direccion=$request->direccion;
        $laboratorio->telefono=$request->telefono;
        $laboratorio->id_provincias=$request->id_provincias;
        $laboratorio->save();
        return $laboratorio;
    }
    public function destroy($id)
    {
        return Laboratorios::destroy($id);
    }
}
