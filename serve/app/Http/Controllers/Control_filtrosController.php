<?php

namespace App\Http\Controllers;
use App\Models\Control_filtros;
use Illuminate\Http\Request;

class Control_filtrosController extends Controller
{
    public function index()
    {
        return Control_filtros::all();
    }
    public function store(Request $request)
    {
        $control=new Control_filtros();
        $control->fecha=$request->fecha;
        $control->numero_correlativo=$request->numero_correlativo;
        $control->cod_tarjeta_inicial=$request->cod_tarjeta_inicial;
        $control->cod_tarjeta_final=$request->cod_tarjeta_final;
        $control->cantidad=$request->cantidad;
        $control->id_centros=$request->id_centros;
        $control->entregado_por=$request->entregado_por;
        $control->recibido_por=$request->recibido_por;
        $control->save();
        return $control;
    }
    public function update(Request $request, $id)
    {
        $control=Control_filtros::find($id);
        $control->fecha=$request->fecha;
        $control->numero_correlativo=$request->numero_correlativo;
        $control->cod_tarjeta_inicial=$request->cod_tarjeta_inicial;
        $control->cod_tarjeta_final=$request->cod_tarjeta_final;
        $control->cantidad=$request->cantidad;
        $control->id_centros=$request->id_centros;
        $control->entregado_por=$request->entregado_por;
        $control->recibido_por=$request->recibido_por;
        $control->save();
        return $control;
    }

    public function destroy($id)
    {
        return Control_filtros::destroy($id);
    }
}
