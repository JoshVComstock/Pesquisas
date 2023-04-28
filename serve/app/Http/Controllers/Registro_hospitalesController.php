<?php

namespace App\Http\Controllers;
use App\Models\Registro_hospitales;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Registro_hospitalesController extends Controller
{
    public function index()
    {
        return DB::select('SELECT r.id,r.hora, r.fecha, r.cod_tarjeta, r.cantidad_recibida, r.cantidad_entregada, c.nombre as nombre_centro, r.entregado_por, r.telefono, e.nombre as nombre_red, r.recibido_por FROM Registro_hospitales r JOIN Centros c ON r.id_centros = c.id JOIN Redes e ON r.id_redes = e.id;
        ');
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
