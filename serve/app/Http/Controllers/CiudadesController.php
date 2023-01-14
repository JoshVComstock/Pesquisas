<?php

namespace App\Http\Controllers;
use App\Models\Ciudades;
use Illuminate\Http\Request;

class CiudadesController extends Controller
{

    public function index()
    {
        return Ciudades::all();
    }
    public function store(Request $request)
    {
        $Ciudades=new Ciudades();
        $Ciudades->ciudad=$request->ciudad;
        $Ciudades->save();
        return $Ciudades;
    }
    public function update(Request $request, $id)
    {
        $Ciudades=Ciudades::find($id);
        $Ciudades->ciudad=$request->ciudad;
        $Ciudades->save();
        return $Ciudades;
    }

    public function destroy($id)
    {
        return Ciudades::destroy($id);
    }
}
