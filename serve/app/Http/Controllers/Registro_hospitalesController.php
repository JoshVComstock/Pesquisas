<?php

namespace App\Http\Controllers;
use App\Models\Registro_hospitales;
use Illuminate\Http\Request;

class Registro_hospitalesController extends Controller
{
    public function index()
    {
        return Registro_hospitales::all();
    }
    public function store(Request $request)
    {
        $hospitales=new Registro_hospitales();
        $hospitales->hora=$request->hora;
        $hospitales->fecha=$request->fecha;
        $hospitales->id_redes=$request->id_redes;
        $hospitales->id_centros=$request->id_centros;
        $hospitales->cantidad_recibida=$request->cantidad_recibida;
        $hospitales->cantidad_entregada=$request->cantidad_entregada;
        $hospitales->cod_tarjeta=$request->cod_tarjeta;
        $hospitales->entregado_por=$request->entregado_por;
        $hospitales->telefono=$request->telefono;
        $hospitales->recibido_por=$request->recibido_por;
        $hospitales->save();
        return $hospitales;
    }
    public function update(Request $request, $id)
    {
        $hospitales=Registro_hospitales::find($id);
        $hospitales->hora=$request->hora;
        $hospitales->fecha=$request->fecha;
        $hospitales->id_redes=$request->id_redes;
        $hospitales->id_centros=$request->id_centros;
        $hospitales->cantidad_recibida=$request->cantidad_recibida;
        $hospitales->cantidad_entregada=$request->cantidad_entregada;
        $hospitales->cod_tarjeta=$request->cod_tarjeta;
        $hospitales->entregado_por=$request->entregado_por;
        $hospitales->telefono=$request->telefono;
        $hospitales->recibido_por=$request->recibido_por;
        $hospitales->save();
        return $hospitales;
    }
    public function destroy($id)
    {
        return Registro_hospitales::destroy($id);
    }
}
