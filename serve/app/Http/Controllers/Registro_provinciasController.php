<?php

namespace App\Http\Controllers;

use App\Models\Registro_provincias;
use Illuminate\Http\Request;

class Registro_provinciasController extends Controller
{
    public function index()
    {
        return Registro_provincias::all();
    }
    public function store(Request $request)
    {
        $provincias = new Registro_provincias();
        $provincias->hora = $request->hora;
        $provincias->fecha = $request->fecha;

        $provincias->id_provincias = $request->id_provincias;

        $provincias->id_municipios = $request->id_municipios;
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
        $provincias->id_provincias = $request->id_provincias;
        $provincias->id_municipios = $request->id_municipios;
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
