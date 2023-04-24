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
        return DB::select('SELECT c.id, c.nombre,c.direccion,c.telefono,m.municipio,c.area,c.seguimiento_casos,c.contacto FROM municipios as m, centros as c WHERE c.id_municipios=m.id
        ');
    }
    public function store(Request $request)
    {
        $centros = new Centros();
        $centros->nombre = $request->nombre;
        $centros->direccion = $request->direccion;
        $centros->telefono = $request->telefono;
        $centros->id_municipios = $request->id_municipios;
        $centros->area = $request->area;
        $centros->seguimiento_casos = $request->seguimiento_casos;
        $centros->contacto = $request->contacto;
        $centros->save();

        return $centros;
    }
    public function update(Request $request, $id)
    {
        $centros = Centros::find($id);
        $centros->nombre = $request->nombre;
        $centros->direccion = $request->direccion;
        $centros->telefono = $request->telefono;
        $centros->id_municipios = $request->id_municipios;
        $centros->area = $request->area;
        $centros->seguimiento_casos = $request->seguimiento_casos;
        $centros->contacto = $request->contacto;
        $centros->save();
        return $centros;
    }
    public function destroy($id)
    {
        return Centros::destroy($id);
    }
}
