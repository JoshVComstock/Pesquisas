<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartilla PDF</title>
    <style>
        h1 {
            text-align: center;
        }

        #customers {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        #customers td,
        #customers th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #customers tr:nth-child(event) {
            background-color: #f2f2;
        }

        #customers td:hover {
            background-color: #ddd;
        }

        #customers th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #04aa6d;
            color: white;
        }
    </style>
</head>

<body>
    <h1>Cartilla</h1>
    <p><strong>Fecha de exportación:</strong>  {{ date('d-m-Y ') }}</p>
    <p><strong>Fecha de hora:</strong>  {{ date('H:i:s') }}</p>
    <table id="customers">
       <tr>
        <th>#</th>
        <th>Codigo barra</th>
        <th>Madre</th>
       </tr>
        @foreach($cartilla as $cartill)
        <tr>
            <td>{{$cartill->id}}</td>
            <td>{{$cartill->codigo_barras}}</td>
            <td>{{$cartill->madre}}</td>

        </tr>
        @endforeach
    </table>
</body>

</html>
