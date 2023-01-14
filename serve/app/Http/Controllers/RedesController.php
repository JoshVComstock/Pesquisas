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
        $redes=new Redes();
        $redes->nombre=$request->nombre;
        $redes->save();
        return $redes;
    }
    public function update(Request $request, $id)
    {
        $redes=Redes::find($id);
        $redes->nombre=$request->nombre;
        $redes->save();
        return $redes;
    }
    public function destroy($id)
    {
        return Redes::destroy($id);
    }
}
