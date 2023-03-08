<?php

namespace App\Http\Controllers;
use App\Models\Redes;
use Illuminate\Http\Request;

class RedesController extends Controller
{
    public function index()
    {
        return Redes::all();
    }
    public function store(Request $request)
    {
        $Redes=new Redes();
        $Redes->nombre=$request->nombre;
        $Redes->save();
        return $Redes;
    }
    public function update(Request $request, $id)
    {
        $Redes=Redes::find($id);
        $Redes->nombre=$request->nombre;
        $Redes->save();
        return $Redes;
    }
    public function destroy($id)
    {
        return Redes::destroy($id);
    }
}
