<?php

namespace App\Http\Controllers;
use App\Models\Enfermedades;
use Illuminate\Http\Request;

class EnfermedadesController extends Controller
{
    public function index()
    {
        return Enfermedades::all();
    }
    public function store(Request $request)
    {
        $enfermedades=new Enfermedades();
        $enfermedades->nombre=$request->nombre;
        $enfermedades->descripcion=$request->descripcion;
        $enfermedades->extra=$request->extra;
        $enfermedades->save();
        return $enfermedades;
    }
    public function update(Request $request, $id)
    {
        $enfermedades= Enfermedades::find($id);
        $enfermedades->nombre=$request->nombre;
        $enfermedades->descripcion=$request->descripcion;
        $enfermedades->extra=$request->extra;
        $enfermedades->save();
        return $enfermedades;
    }
    public function destroy($id)
    {
        return Enfermedades::destroy($id);
    }
}
