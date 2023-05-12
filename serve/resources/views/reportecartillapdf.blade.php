<!DOCTYPE html>
<html>
<head>
    <style>
        /* Estilos CSS para el formato del PDF */
        /* ... */
    </style>
</head>
<body>
    <h1>Reporte de Cartillas</h1>

    <table>
        <thead>
            <tr>
                @foreach($campos as $campo)
                    <th>{{ $campo }}</th>
                @endforeach
            </tr>
        </thead>
        <tbody>
            @foreach($data as $item)
                <tr>
                    @foreach($campos as $campo)
                        <td>{{ $item[$campo] }}</td>
                    @endforeach
                </tr>
            @endforeach
        </tbody>
    </table>
</body>
</html>
