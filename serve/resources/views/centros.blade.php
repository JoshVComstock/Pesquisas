
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporte de Centros</title>
    <style>

h1 {
    text-align: center;
    display: flex;
    font-size: 1.5em;
  margin: 15px auto ;
    width: 50%;
}

h2 {
    width: 30%;
    display: inline;
    font-size: 1.2em;
    margin-top: 1.5em;
    border-bottom: solid 1px rgb(0, 0, 0);
    margin:0.5em;
    text-align: center
}

table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    margin: 0 auto ;
}

th,
td {

    text-align: left;
    padding: 8px;
}

th {
    background-color: #132d73;
    color: white;
    font-weight: 200;
}
tr th{
margin: 1em 0;
}
tr:nth-child(even) {
    background-color: #e0e0e0;
    color:#000000;
}
.sec {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
img{
    width: auto;
    height: 30px;
}

    </style>
</head>

<body>
    <section class="sec">
        <img src="https://www.biotech.com.bo/Administrador/images/logo.png" alt="logo">
        <h1>Exportacion de registros de Centros </h1>
    <h2>Tamizaje neonatal</h2>
    <p><strong>Fecha de exportación:</strong>  {{ date('d-m-Y ') }}</p>
    <p><strong>Fecha de hora:</strong>  {{ date('H:i:s') }}</p>

    </section>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>nombre</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Municipio</th>
                <th>Area</th>
                <th>Seguimiento</th>
                <th>Contacto</th>
            </tr>
        </thead>
        <tbody>
            @foreach($centros as $cen)
            <tr>
                <td>{{$cen->id}}</td>
            <td>{{$cen->nombre}}</td>
            <td>{{$cen->direccion}}</td>
            <td>{{$cen->telefono}}</td>
            <td>{{$cen->municipio}}</td>
            <td>{{$cen->area}}</td>
            <td>{{$cen->seguimiento_casos}}</td>
            <td>{{$cen->contacto}}</td>
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <th>Total de Ciudades:</th>
                <td>{{ count($centros) }}</td>
            </tr>
        </tfoot>
    </table>
</body>

</html>
