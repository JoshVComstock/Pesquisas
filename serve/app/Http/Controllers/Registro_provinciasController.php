<?php

namespace App\Http\Controllers;

use App\Models\Registro_provincias;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Registro_provinciasController extends Controller
{
    public function index()
    {
        return DB::select('SELECT r.hora, r.fecha, r.cod_tarjeta, r.cantidad_recibida, r.cantidad_entregada, c.nombre as nombre_centro, r.entregado_por, r.telefono, r.recibido_por FROM Registro_hospitales r JOIN Centros c ON r.id_centros = c.id
        ');
        // return DB::select('SELECT p.id,p.provincia,c.ciudad,c.id as id_ciudades FROM provincias as p, ciudades as c WHERE p.id_ciudades=c.id;
        // ');
        // return Registro_provincias::all();
    }
    public function store(Request $request)
    {
        $provincias = new Registro_provincias();
        $provincias->hora = $request->hora;
        $provincias->fecha = $request->fecha;
        $provincias->id_centros = $request->id_centros;
        $provincias->cantidad_recibida = $request->cantidad_recibida;
        $provincias->cantidad_entregada = $request->cantidad_entregada;
        $provincias->cod_tarjeta = $request->cod_tarjeta;
        $provincias->entregado_por = $request->entregado_por;
        $provincias->telefono = $request->telefono;
        $provincias->recibido_por = $request->recibido_por;
        $provincias->save();
        return $provincias;
    }
    public function update(Request $request, $id)
    {
        $provincias = Registro_provincias::find($id);
        $provincias->hora = $request->hora;
        $provincias->fecha = $request->fecha;
        $provincias->id_centros = $request->id_centros;
        $provincias->cantidad_recibida = $request->cantidad_recibida;
        $provincias->cantidad_entregada = $request->cantidad_entregada;
        $provincias->cod_tarjeta = $request->cod_tarjeta;
        $provincias->entregado_por = $request->entregado_por;
        $provincias->telefono = $request->telefono;
        $provincias->recibido_por = $request->recibido_por;
        $provincias->save();
        return $provincias;
    }

    public function destroy($id)
    {
        return Registro_provincias::destroy($id);
    }
}
