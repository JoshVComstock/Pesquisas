<!DOCTYPE html>
<html>
<head>
    <title>Reporte</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
        }
    </style>
</head>
<body>
    <h1>Reporte</h1>

    <table>
        <thead>
            <tr>
                <th>Tabla</th>
                <th>ID</th>
                @foreach ($campos as $campo)
                    <th>{{ $campo }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            {{-- @foreach ($data as $item)
                <tr>
                    <td>{{ $item['tabla'] }}</td>
                    <td>{{ $item['id'] }}</td>
                    @foreach ($campos as $campo)
                        <td>{{ $item['valor'][$campo] }}</td>
                    @endforeach
                </tr>
            @endforeach --}}
            @foreach ($data as $item)
    <tr>
        <td>{{ $item['tabla'] }}</td>
        <td>{{ $item['id'] }}</td>
        @foreach ($campos as $campo)
            <td>{{ $item['valor'][$campo] }}</td>
        @endforeach
    </tr>
@endforeach
        </tbody>
    </table>
</body>
</html>
