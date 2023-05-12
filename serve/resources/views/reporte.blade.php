<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporte</title>
</head>
<body>
    <h1>Reporte</h1>
    <table>
        <thead>
            <tr>
                <!-- Agrega encabezados de columna según los campos seleccionados -->
                @foreach ($campos as $campo)
                    <th>{{ $campo }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            <!-- Agrega filas de datos según los campos y datos seleccionados -->
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
