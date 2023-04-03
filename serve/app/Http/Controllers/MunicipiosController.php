<?php

namespace App\Http\Controllers;

use App\Models\Municipios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MunicipiosController extends Controller
{
    public function index()
    {
        return DB::select('SELECT m.id,m.municipio,c.ciudad,c.id as id_ciudades FROM municipios as m, ciudades as c WHERE m.id_ciudades=c.id');
    }
    public function store(Request $request)
    {
        $municipios = new Municipios();
        $municipios->municipio = $request->municipio;
        $municipios->id_provincias = $request->id_provincias;
        $municipios->save();
        return $municipios;
    }
    public function update(Request $request, $id)
    {
        $municipios = Municipios::find($id);
        $municipios->municipio = $request->municipio;
        $municipios->id_provincias = $request->id_provincias;
        $municipios->save();
        return $municipios;
    }
    public function destroy($id)
    {
        return Municipios::destroy($id);
    }
}
