<?php

namespace App\Http\Controllers;
use App\Models\Provincias;
use Illuminate\Http\Request;

class ProvinciasController extends Controller
{
    public function index()
    {
        return Provincias::all();
    }
    public function store(Request $request)
    {
        $provincias=new Provincias();
        $provincias->provincia=$request->provincia;
        $provincias->id_ciudades=$request->id_ciudades;
        $provincias->save();
        return $provincias;
    }
    public function update(Request $request, $id)
    {
        $provincias=Provincias::find($id);
        $provincias->provincia=$request->provincia;
        $provincias->id_ciudades=$request->id_ciudades;
        $provincias->save();
        return $provincias;
    }
    public function destroy($id)
    {
        return Provincias::destroy($id);
    }
}
