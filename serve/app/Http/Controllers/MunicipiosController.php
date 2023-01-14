<?php

namespace App\Http\Controllers;
use App\Models\Municipios;
use Illuminate\Http\Request;

class MunicipiosController extends Controller
{
    public function index()
    {
        return Municipios::all();
    }
    public function store(Request $request)
    {
        $municipios=new Municipios();
        $municipios->municipio=$request->municipios;
        $municipios->id_ciudades=$request->id_ciudades;
        $municipios->save();
        return $municipios;
    }
    public function update(Request $request, $id)
    {
        $municipios=Municipios::find($id);
        $municipios->municipio=$request->municipios;
        $municipios->id_ciudades=$request->id_ciudades;
        $municipios->save();
        return $municipios;
    }
    public function destroy($id)
    {
        return Municipios::destroy($id);
    }
}
