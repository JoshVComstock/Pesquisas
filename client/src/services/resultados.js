const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const postResultados = async (id_cartillas, id_laboratorio, fecha_ingreso, fecha_resultado, fecha_entregado, resultado, metodo, valor_resultado, valor_referencia, observaciones, callback) => {

    console.log(JSON.stringify({
        id_cartillas: id_cartillas,
        id_laboratorio: id_laboratorio,
        fecha_ingreso: fecha_ingreso,
        fecha_resultado: fecha_resultado,
        fecha_entregado: fecha_entregado,
        resultado: resultado,
        metodo: metodo,
        valor_resultado: valor_resultado,
        valor_referencia: valor_referencia,
        observaciones: observaciones
    }))

    const response = await fetch(`${baseUrl}resultados`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({
            id_cartillas: id_cartillas,
            id_laboratorio: id_laboratorio,
            fecha_ingreso: fecha_ingreso,
            fecha_resultado: fecha_resultado,
            fecha_entregado: fecha_entregado,
            resultado: resultado,
            metodo: metodo,
            valor_resultado: valor_resultado,
            valor_referencia: valor_referencia,
            observaciones: observaciones
        })
    });
    if (response.ok) {
        callback();
    }
}