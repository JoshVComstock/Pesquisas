<?php

namespace App\Http\Controllers;
use App\Models\Madres;
use Illuminate\Http\Request;

class MadresController extends Controller
{
    public function index()
    {
        return Madres::all();
    }
    public function store(Request $request)
    {
        $madre=new Madres();
        $madre->nombre=$request->nombre;
        $madre->apellidos=$request->apellidos;
        $madre->ci=$request->ci;
        $madre->id_ciudades=$request->id_ciudades;
        $madre->direccion=$request->direccion;
        $madre->telefono1=$request->telefono1;
        $madre->telefono2=$request->telefono2;
        $madre->tratamiento_hipertiroidismo=$request->tratamiento_hipertiroidismo;
        $madre->tratamiento_hipotiroidismo=$request->tratamiento_hipotiroidismo;
        $madre->enfermedad=$request->enfermedad;
        $madre->detalle_direccion=$request->detalle_direccion;
        $madre->save();
        return $madre;
    }
    public function update(Request $request, $id)
    {
        $madre=Madres::find($id);
        $madre->nombre=$request->nombre;
        $madre->apellidos=$request->apellidos;
        $madre->ci=$request->ci;
        $madre->id_ciudades=$request->id_ciudades;
        $madre->direccion=$request->direccion;
        $madre->telefono1=$request->telefono1;
        $madre->telefono2=$request->telefono2;
        $madre->tratamiento_hipertiroidismo=$request->tratamiento_hipertiroidismo;
        $madre->tratamiento_hipotiroidismo=$request->tratamiento_hipotiroidismo;
        $madre->enfermedad=$request->enfermedad;
        $madre->detalle_direccion=$request->detalle_direccion;
        $madre->save();
        return $madre;
    }
    public function destroy($id)
    {
        return Madres::destroy($id);
    }
}
