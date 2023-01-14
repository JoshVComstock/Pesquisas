<?php

namespace App\Http\Controllers;
use App\Models\Rellamados;
use Illuminate\Http\Request;

class RellamadosController extends Controller
{
    public function index()
    {
        return Rellamados::all();
    }
    public function store(Request $request)
    {
        $rellamados=new Rellamados();
        $rellamados->id_cartillas=$request->id_cartillas;
        $rellamados->nombre_bebe=$request->nombre_bebe;
        $rellamados->fn=$request->fn;
        $rellamados->ft=$request->ft;
        $rellamados->ing=$request->ing;
        $rellamados->proc=$request->proc;
        $rellamados->tsh=$request->tsh;
        $rellamados->fnot=$request->fnot;
        $rellamados->cs=$request->cs;
        $rellamados->tipo_muestra=$request->tipo_muestra;
        $rellamados->resultado=$request->resultado;
        $rellamados->save();
        return $rellamados;
    }
    public function update(Request $request, $id)
    {
        $rellamados=Rellamados::find($id);
        $rellamados->id_cartillas=$request->id_cartillas;
        $rellamados->nombre_bebe=$request->nombre_bebe;
        $rellamados->fn=$request->fn;
        $rellamados->ft=$request->ft;
        $rellamados->ing=$request->ing;
        $rellamados->proc=$request->proc;
        $rellamados->tsh=$request->tsh;
        $rellamados->fnot=$request->fnot;
        $rellamados->cs=$request->cs;
        $rellamados->tipo_muestra=$request->tipo_muestra;
        $rellamados->resultado=$request->resultado;
        $rellamados->save();
        return $rellamados;
    }
    public function destroy($id)
    {
        return Rellamados::destroy($id);
    }
}
