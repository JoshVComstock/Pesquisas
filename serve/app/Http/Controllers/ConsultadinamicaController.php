<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as pdf; // Importar la clase PDF correctamente
use App\Models\Cartillas;
use App\Models\Pacientes;
use App\Models\Resultados;

use Barryvdh\DomPDF\Facade\Pdf as FacadePdf;
use Illuminate\Support\Facades\DB;

class ConsultadinamicaController extends Controller
{
    // public function generar(Request $request)
    // {
    //     $campos = $request->input('campos');
    //     $camposCartillas = $campos['cartillas'];
    //     $filtros = $request->input('filtros');

    //     $cartillas = Cartillas::with(['pacientes.madres', 'resultados'])
    //         ->when($filtros['casos'], function ($query) use ($filtros) {
    //             if ($filtros['casos'] === 'positivos') {
    //                 return $query->whereHas('resultados', function ($subquery) {
    //                     $subquery->where('resultado', 'positivo');
    //                 });
    //             } elseif ($filtros['casos'] === 'negativos') {
    //                 return $query->whereHas('resultados', function ($subquery) {
    //                     $subquery->where('resultado', 'negativo');
    //                 });
    //             } elseif ($filtros['casos'] === 'sospechosos') {
    //                 return $query->whereHas('resultados', function ($subquery) {
    //                     $subquery->where('resultado', 'sospechoso');
    //                 });
    //             }
    //         })
    //         ->when($filtros['sexo'], function ($query) use ($filtros) {
    //             return $query->whereHas('pacientes', function ($subquery) use ($filtros) {
    //                 $subquery->where('sexo', $filtros['sexo']);
    //             });
    //         })
    //         ->when($filtros['rangoFechas'], function ($query) use ($filtros) {
    //             return $query->whereBetween('fecha_toma_muestra', [$filtros['rangoFechas']['inicio'], $filtros['rangoFechas']['fin']]);
    //         })
    //         ->get();

    //     $data = [];
    //     foreach ($cartillas as $cartilla) {
    //         $item = [];

    //         foreach ($camposCartillas as $campoCartilla) {
    //             $item[$campoCartilla] = $cartilla->$campoCartilla;
    //         }

    //         foreach ($campos['pacientes'] as $campoPaciente) {
    //             $item[$campoPaciente] = $cartilla->pacientes->$campoPaciente;
    //         }

    //         foreach ($campos['madres'] as $campoMadre) {
    //             $item[$campoMadre] = $cartilla->pacientes->madres->$campoMadre;
    //         }

    //         $data[] = $item;
    //     }

    //     $pdf = FacadePdf::loadView('reporte', ['campos' => $camposCartillas, 'data' => $data]);

    //     return $pdf->stream('reporte.pdf');
    // }
    public function generar(Request $request)
    {
        $campos = $request->input('campos');
        $filtros = $request->input('filtros');

        $query = Pacientes::query();

        // Aplicar filtros
        if (isset($filtros['sexo'])) {
            $query->where('sexo', $filtros['sexo']);
        }
        if (isset($filtros['fecha_nacimiento']['start']) && isset($filtros['fecha_nacimiento']['end'])) {
            $query->whereBetween('fecha_nacimiento', [$filtros['fecha_nacimiento']['start'], $filtros['fecha_nacimiento']['end']]);
        }
        $pacientes = $query->get();

        $data = [];
        foreach ($pacientes as $paciente) {
            $item = [];
            foreach ($campos as $campo) {
                $item[$campo] = $paciente->$campo;
            }
            $data[] = $item;
        }

        $pdf = FacadePdf::loadView('reporte', ['campos' => $campos, 'data' => $data]);

        return $pdf->stream('reporte.pdf');
    }
}
