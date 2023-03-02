<?php

namespace App\Http\Controllers;

use App\Models\Provincias;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProvinciasController extends Controller
{
    public function index()
    {
        return DB::select('SELECT p.provincia,c.ciudad FROM provincias as p, ciudades as c WHERE p.id_ciudades=c.id;
        ');
    }
    public function store(Request $request)
    {
        $provincias = new Provincias();
        $provincias->provincia = $request->provincia;
        $provincias->id_ciudades = $request->id_ciudades;
        $provincias->save();
        return $provincias;
    }
    public function update(Request $request, $id)
    {
        $provincias = Provincias::find($id);
        $provincias->provincia = $request->provincia;
        $provincias->id_ciudades = $request->id_ciudades;
        $provincias->save();
        return $provincias;
    }
    public function destroy($id)
    {
        return Provincias::destroy($id);
    }
}
