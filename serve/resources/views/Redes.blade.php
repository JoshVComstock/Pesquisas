
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exportacion de datos de Redes</title>
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

        <h1>Exportacion de datos de redes</h1>
    <h2>Tamizaje neonatal</h2>
    <p><strong>Fecha de exportación:</strong>  {{ date('d-m-Y ') }}</p>
    <p><strong>Fecha de hora:</strong>  {{ date('H:i:s') }}</p>
    </section>
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>nombre</th>
               
            </tr>
        </thead>
        <tbody>
            @foreach($Redes as $re)
            <tr>
                <td>{{$re->id}}</td>
            <td>{{$re->nombre}}</td>
            
            </tr>
            @endforeach
        </tbody>
        <tfoot>
            <tr>
                <th>Total de Redes:</th>
                <td>{{ count($Redes) }}</td>

            </tr>
        </tfoot>
    </table>
</body>

</html>
