<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as pdf; // Importar la clase PDF correctamente
use App\Models\Cartillas;
use App\Models\Madres;
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
    public function generar2(Request $request)
{
    $campos = $request->input('campos');
    $filtros = $request->input('filtros');

    $query = Pacientes::query();
    $query->leftJoin('madres', 'pacientes.id_madres', '=', 'madres.id'); // Realizar la unión con la tabla "madres"

    // Aplicar filtros
    if (isset($filtros['sexo'])) {
        $query->where('pacientes.sexo', $filtros['sexo']);
    }
    if (isset($filtros['fecha_nacimiento']['start']) && isset($filtros['fecha_nacimiento']['end'])) {
        $query->whereBetween('pacientes.fecha_nacimiento', [$filtros['fecha_nacimiento']['start'], $filtros['fecha_nacimiento']['end']]);
    }
    if (isset($filtros['enfermedad'])) {
        if ($filtros['enfermedad'] === 'si') {
            $query->whereNotNull('madres.enfermedad');
        } elseif ($filtros['enfermedad'] === 'no') {
            $query->whereNull('madres.enfermedad');
        } elseif ($filtros['enfermedad'] === 'especifica') {
            $enfermedad = $filtros['enfermedad_especifica'];
            $query->where('madres.enfermedad', $enfermedad);
        }
    }

    $pacientes = $query->get(['pacientes.*', 'madres.nombre', 'madres.apellidos', 'madres.ci', 'madres.direccion', 'madres.telefono1', 'madres.enfermedad', 'madres.detalle_direccion']);

    $data = [];
    foreach ($pacientes as $paciente) {
        $item = [];
        foreach ($campos as $campo) {
            if (strpos($campo, 'madres.') === 0) {
                $campoMadre = str_replace('madres.', '', $campo);
                $item[$campo] = $paciente->$campoMadre;
            } else {
                $item[$campo] = $paciente->$campo;
            }
        }
        $data[] = $item;
    }

    $pdf = FacadePdf::loadView('reporte2', ['campos' => $campos, 'data' => $data]);

    return $pdf->stream('reporte.pdf');
}
public function generar3(Request $request)
{
    $campos = $request->input('campos');

    $data = [];

    foreach ($campos as $campo) {
        $tabla = explode('.', $campo)[0];
        $columna = explode('.', $campo)[1];

        if ($tabla === 'pacientes') {
            $pacientes = Pacientes::all();
            foreach ($pacientes as $paciente) {
                $item = [
                    'tabla' => $tabla,
                    'id' => $paciente->id,
                    'valor' => [
                        $columna => $paciente->$columna,
                    ],
                ];
                $data[] = $item;
            }
        } elseif ($tabla === 'madres') {
            $madres = Madres::all();
            foreach ($madres as $madre) {
                $item = [
                    'tabla' => $tabla,
                    'id' => $madre->id,
                    'valor' => [
                        $columna => $madre->$columna,
                    ],
                ];
                $data[] = $item;
            }
        }
    }


    $pdf = FacadePdf::loadView('Reporte3', ['data' => $data, 'campos' => $campos]);
    return $pdf->stream('reporte.pdf');
}

    public function generarmadres(Request $request)
{
    $campos = $request->input('campos');
    $filtros = $request->input('filtros');
    $query = Madres::query();

    // Aplicar filtro de enfermedad
    if (isset($filtros['enfermedad'])) {
        $query->where('enfermedad', $filtros['enfermedad']);
    }
    // Aplicar filtro de rango de fechas
    if (isset($filtros['fecha']['start']) && isset($filtros['fecha']['end'])) {
        $query->whereBetween('created_at', [$filtros['fecha']['start'], $filtros['fecha']['end']]);
    }

    $madres = $query->get();

    $data = [];
    foreach ($madres as $madre) {
        $item = [];
        foreach ($campos as $campo) {
            $item[$campo] = $madre->$campo;
        }
        $data[] = $item;
    }

    $pdf = FacadePdf::loadView('Reportemadre', ['campos' => $campos, 'data' => $data]);
    $pdf->setPaper('A4', 'landscape');
    $pdf->setOption('footer-html', view('footer'));
    return $pdf->stream('reporte.pdf');

}

public function reporteCartillasPdf(Request $request)
{
    $campos = $request->input('campos');
    $filtros = $request->input('filtros');

    $query = Cartillas::query();

    // Aplicar filtros
    if (isset($filtros['codigo_barras'])) {
        $query->where('codigo_barras', $filtros['codigo_barras']);
    }

    if (isset($filtros['fecha_toma_muestra']['start']) && isset($filtros['fecha_toma_muestra']['end'])) {
        $query->whereBetween('fecha_toma_muestra', [$filtros['fecha_toma_muestra']['start'], $filtros['fecha_toma_muestra']['end']]);
    }

    if (isset($filtros['peso_nacimiento'])) {
        $query->where('peso_nacimiento', $filtros['peso_nacimiento']);
    }

    if (isset($filtros['transfusion'])) {
        $query->where('transfusion', $filtros['transfusion']);
    }

    $cartillas = $query->get();

    $data = [];
    foreach ($cartillas as $cartilla) {
        $item = [];
        foreach ($campos as $campo) {
            $item[$campo] = $cartilla->$campo;
        }
        $data[] = $item;
    }

    $pdf = FacadePdf::loadView('reportecartillapdf', ['campos' => $campos, 'data' => $data]);

    return $pdf->stream('reporte.pdf');
}


}

