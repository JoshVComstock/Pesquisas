<?php

namespace App\Http\Controllers;
use App\Models\Centros;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CentrosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::select('SELECT ce.nombre,ce.direccion,r.nombre as red,ce.telefono, c.ciudad,ce.area,ce.seguimiento_casos,ce.contacto FROM redes as r , ciudades as c, centros as ce WHERE ce.id_redes=r.id and ce.id_ciudades=c.id;
        ');
    }
    public function store(Request $request)
    {
        $centros= new Centros();
        $centros->nombre=$request->nombre;
        $centros->direccion=$request->direccion;
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
        $centros->direccion=$request->direccion;
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
