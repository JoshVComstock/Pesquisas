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
        $madre->ap_paterno=$request->ap_paterno;
        $madre->ap_materno=$request->ap_materno;
        $madre->ci=$request->ci;
        $madre->id_ciudades=$request->id_ciudades;
        $madre->direccion=$request->direccion;
        $madre->telefono1=$request->telefono1;
        $madre->telefono2=$request->telefono2;
        $madre->id_enfermedades=$request->id_enfermedades;
        $madre->detalle_direccion=$request->detalle_direccion;
        $madre->save();
        return $madre;
    }
    public function update(Request $request, $id)
    {
        $madre=Madres::find($id);
        $madre->nombre=$request->nombre;
        $madre->ap_paterno=$request->ap_paterno;
        $madre->ap_materno=$request->ap_materno;
        $madre->ci=$request->ci;
        $madre->id_ciudades=$request->id_ciudades;
        $madre->direccion=$request->direccion;
        $madre->telefono1=$request->telefono1;
        $madre->telefono2=$request->telefono2;
        $madre->id_enfermedades=$request->id_enfermedades;
        $madre->detalle_direccion=$request->detalle_direccion;
        $madre->save();
        return $madre;
    }
    public function destroy($id)
    {
        return Madres::destroy($id);
    }
}
