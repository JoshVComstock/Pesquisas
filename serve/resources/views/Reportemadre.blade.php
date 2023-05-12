<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
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
            width: 100%;
        }

        th {
            background-color: #132d73;
            color: white;
        }
        tr th{
        margin: 1em 0;

        }
        tr:nth-child(even) {
            color:#000000;
            border: solid 1px #0005;
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
        .table {
      width: 100%;
      border-collapse: collapse;
      font: 100;
    }

    .table th,
    .table td {
      padding: 8px;
      border-bottom: 1px solid #ccc;
      backdrop-color:#fff;
    }

    .table tr:first-child td:first-child {
      grid-column: span 2; /* Primera fila, primera celda */
    }

    .table tr:nth-child(2) td:first-child,
    .table tr:nth-child(2) td:last-child {
      grid-column: span 1; /* Segunda fila, primera y última celda */
    }

    .table tr:nth-child(3) td {
      grid-column: span 1; /* Tercera fila, todas las celdas */
    }


            </style>
</head>
<body>
    <section class="sec">
        <img src="https://www.biotech.com.bo/Administrador/images/logo.png" alt="logo">

        <h1>Exportacion de datos Madres</h1>

    </section>

    <table class="table">
        <tr>
          <td colspan="2"><h2>Tamizaje neonatal</h2></td>
        </tr>
        <tr>
          <td>Fecha de exportación:</td>
          <td>{{ date('d-m-Y ') }}</td>
        </tr>
        <tr>
            <td>Fecha de hora::</td>
            <td>{{ date('H:i:s') }}</td>
          </tr>

      </table>
<br>
   

    <table>
        <thead>
            <tr>
                @foreach ($campos as $campo)
                    <th>{{ $campo }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach ($data as $item)
                <tr>
                    @foreach ($campos as $campo)
                        <td>{{ $item[$campo] }}</td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
