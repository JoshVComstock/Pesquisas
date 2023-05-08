
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Cantidad de casos por Ciudad </title>
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
        <h1>Exportacion de datos Referentes a grafica de Cantidad de casos por Ciudad - General</h1>
    <h2>Tamizaje neonatal</h2>
    <p><strong>Fecha de exportación:</strong>  {{ date('d-m-Y ') }}</p>
    <p><strong>Fecha de hora:</strong>  {{ date('H:i:s') }}</p>
    </section>
    <table>
        <thead>
            <tr>

                <th>#</th>
                <th>nombre_paciente</th>
                <th>ap_paterno</th>
                <th>ap_materno</th>
                <th>id_madre</th>
                <th>nombre_madre</th>
                <th>apellidos </th>
                <th>resultado </th>
                <th>fecha_resultado </th>
                <th>Ciudad de Pertenencia </th>
            </tr>
        </thead>

        <tbody>
            @foreach($grapresulciudad as $grpc)
            <tr>
                <td>{{$grpc->id_paciente}}</td>
            <td>{{$grpc->nombre_paciente}}</td>
            <td>{{$grpc->ap_paterno}}</td>
            <td>{{$grpc->ap_materno}}</td>
            <td>{{$grpc->id_madre}}</td>
            <td>{{$grpc->nombre_madre}}</td>
            <td>{{$grpc->apellidos_madre}}</td>
            <td>{{$grpc->resultado}}</td>
            <td>{{$grpc->fecha_resultado}}</td>
            <td>{{$grpc->ciudad_pertenencia}}</td>

            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <th>Total de Registros:</th>
                <td>{{ count($grapresulciudad) }}</td>

            </tr>
        </tfoot>
    </table>
</body>

</html>
