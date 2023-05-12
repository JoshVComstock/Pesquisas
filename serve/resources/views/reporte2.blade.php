<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Informe de Pacientes</title>
    <style>
        /* Estilos CSS para el informe */
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            border: 1px solid #ccc;
            padding: 8px;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Informe de Pacientes</h1>

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
                        @if (strpos($campo, 'pacientes.') === 0)
                        <td>{{ $item[substr($campo, 10)] }}</td>

                            {{-- <td>{{ $item['pacientes'][substr($campo, 10)] }}</td> --}}
                        @elseif (strpos($campo, 'madres.') === 0)
                            <td>{{ $item['madres'][substr($campo, 7)] }}</td>
                        @else
                            <td>{{ $item[$campo] }}</td>
                        @endif
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
