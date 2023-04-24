<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ciudad PDF</title>
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
    <h1>Ciudades</h1>
    <table id="customers">
       <tr>
        <th>#</th>
        <th>Ciudades</th>
       </tr>
        @foreach($ciudad as $ciuda)
        <tr>
            <td>{{$ciuda->id}}</td>
            <td>{{$ciuda->ciudad}}</td>
        </tr>
        @endforeach
    </table>
</body>

</html>