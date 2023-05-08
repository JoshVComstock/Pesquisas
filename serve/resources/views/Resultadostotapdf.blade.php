
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporte de Ciudades</title>
    <style>

h1 {
            text-align: center;
            font-size: 1.2em;
            margin: 15px auto;
            width: 80%;
        }

        h2 {
            text-align: center;
            font-size: 1em;
            margin-top: 1.5em;
            border-bottom: solid 1px rgb(0, 0, 0);
        }

        table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
            margin: 0 auto;
        }

        th, td {
            padding: 8px;
            font-size: 0.8em;
        }

        th {
            background-color: #132d73;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #e0e0e0;
            color: #000000;
        }

        .sec {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8em;
            margin-bottom: 10px;
        }

        img {
            width: auto;
            height: 30px;
        }

    </style>
</head>

<body>
    <section class="sec">
        <img src="https://www.biotech.com.bo/Administrador/images/logo.png" alt="logo">

        <h1>Exportacion de datos de Resultados Casos totales</h1>
    <h2>Tamizaje neonatal</h2>
    <p><strong>Fecha de exportación:</strong>  {{ date('d-m-Y ') }}</p>
    <p><strong>Fecha de hora:</strong>  {{ date('H:i:s') }}</p>
    </section>
    <table>
        <thead>
            <tr>

                <th>#</th>
                <th>id_cartillas</th>
                <th>id_laboratorio</th>
                <th>fecha_ingreso</th>
                <th>fecha_resultado</th>
                <th>resultado</th>
                <th>metodo</th>
                <th>valor_resultado</th>
                <th>valor_referencia</th>
                <th>observaciones</th>

            </tr>
        </thead>
        <tbody>
            @foreach($resultadostota as $resul)
            <tr>
                <td>{{$resul->id}}</td>
                <td>{{$resul->id_cartillas}}</td>
                <td>{{$resul->id_laboratorio}}</td>
                <td>{{$resul->fecha_ingreso}}</td>
                <td>{{$resul->fecha_resultado}}</td>

                <td>{{$resul->resultado}}</td>
                <td>{{$resul->metodo}}</td>
                <td>{{$resul->valor_resultado}}</td>
                <td>{{$resul->valor_referencia}}</td>
                <td>{{$resul->observaciones}}</td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <th>Total de Registros:</th>
                <td>{{ count($resultadostota) }}</td>

            </tr>
        </tfoot>
    </table>
</body>

</html>
