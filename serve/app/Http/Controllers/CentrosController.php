<?php

namespace App\Http\Controllers;
use App\Models\Centros;
use Illuminate\Http\Request;

class CentrosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Centros::all();
    }
    public function store(Request $request)
    {
        $centros= new Centros();
        $centros->nombre=$request->nombre;
        $centros->id_redes=$request->id_redes;
        $centros->telefono=$request->telefono;
        $centros->id_ciudades=$request->ciudades;
        $centros->area=$request->area;
        $centros->seguimiento_casos=$request->seguimiento_casos;
        $centros->contacto=$request->contacto;
        $centros->save();
        
        return $centros;
    }
    public function update(Request $request, $id)
    {
        $centros= Centros::find($id);
        $centros->nombre=$request->nombre;
        $centros->id_redes=$request->id_redes;
        $centros->telefono=$request->telefono;
        $centros->id_ciudades=$request->ciudades;
        $centros->area=$request->area;
        $centros->seguimiento_casos=$request->seguimiento_casos;
        $centros->contacto=$request->contacto;
        $centros->save();
        return $centros;
    }
    public function destroy($id)
    {
        return Centros::destroy($id);
    }
}
