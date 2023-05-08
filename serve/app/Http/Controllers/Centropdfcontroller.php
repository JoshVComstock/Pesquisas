<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;

class Centropdfcontroller extends Controller
{
    // public function indexcentropdf()
    // {
    //     $centros =DB::select('SELECT c.id, c.nombre,c.direccion,c.telefono,m.municipio,c.area,c.seguimiento_casos,c.contacto FROM municipios as m, centros as c WHERE c.id_municipios=m.id
    //     ');
    //     $pdf = PDF::loadView('centros', ['centros' => $centros]);
    //     return $pdf->stream();
    // }

    // public function indexcentropdf(Request $request)
    // {
    //     $query = 'SELECT c.id, c.nombre, c.direccion, c.telefono, m.municipio, c.area, c.seguimiento_casos, c.contacto FROM municipios AS m, centros AS c WHERE c.id_municipios = m.id';

    //     switch ($request->input('filtro')) {
    //         case 'area':
    //             $query .= ' ORDER BY c.area';
    //             break;
    //         case 'nombre':
    //             $query .= ' ORDER BY c.nombre';
    //             break;
    //         case 'telefono':
    //             $query .= ' ORDER BY c.telefono';
    //             break;
    //         case 'seguimiento_casos':
    //                 $query .= ' ORDER BY c.telefono';
    //                 break;
    //         default:
    //             break;
    //     }

    //     $centros = DB::select($query);
    //     return response()->json($centros);
    // }
    public function indexcentropdf(Request $request)
    {
        // Obtenemos los parámetros enviados en la solicitud
        $nombre = $request->input('nombre');
        $area = $request->input('area');
        $telefono = $request->input('telefono');

        // Creamos la consulta para obtener los datos
        $query = DB::table('centros')
                    ->join('municipios', 'centros.id_municipios', '=', 'municipios.id')
                    ->select('centros.id', 'centros.nombre', 'centros.direccion', 'centros.telefono', 'municipios.municipio', 'centros.area', 'centros.seguimiento_casos', 'centros.contacto');

        // Agregamos las condiciones a la consulta en base a los parámetros recibidos
        if (!empty($nombre)) {
            $query->where('centros.nombre', 'LIKE', "%$nombre%");
        }
        if (!empty($area)) {
            $query->where('centros.area', '=', $area);
        }
        if (!empty($telefono)) {
            $query->where('centros.telefono', '=', $telefono);
        }

        // Ejecutamos la consulta y obtenemos los resultados
        $centros = $query->get();

        // Generamos el PDF con los datos obtenidos
        $pdf = PDF::loadView('centros', ['centros' => $centros]);

        // Devolvemos el PDF para que se descargue o se muestre en el navegador
        return $pdf->stream();
    }



}

