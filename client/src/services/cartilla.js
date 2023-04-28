const baseUrl =
    import.meta.env.VITE_BACKEND_URL
export const postCartilla = async (nombremadre, apellidomadre, carnetmadre, idciudad, direccion, telefono, telefono2, tratahiper, tratahipo, enfermedadmadre, detalledireccion, nombrepaciente, primerapellido, segundoapellido, sexo, fechanacimiento, horanacimiento, codigocartilla, converfecha, nacitermino, edadsemana, edaddia, muestra, pesonaci, transfucion, fechatrans, antibioticos, idcentro, callback) => {
    
    const response = await fetch(`${baseUrl}cartillas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
        body: JSON.stringify({
            nombremadre: nombremadre,
            apellidos: apellidomadre,
            ci: carnetmadre,
            id_ciudades: idciudad,
            direccion: direccion,
            telefono1: telefono,
            telefono2: telefono2,
            tratamiento_hipertiroidismo: tratahiper,
            tratamiento_hipotiroidismo: tratahipo,
            enfermedad: enfermedadmadre,
            detalle_direccion: detalledireccion,
            nombrepaciente: nombrepaciente,
            ap_paterno: primerapellido,
            ap_materno: segundoapellido,
            sexo: sexo,
            fecha_nacimiento: fechanacimiento,
            hora_nacimiento: horanacimiento,
            codigo_barras: codigocartilla,
            fecha_toma_muestra: converfecha,
            nacimiento_terminormino: nacitermino,
            edad_gestional_semanas: edadsemana,
            edad_gestional_dia: edaddia,
            muestra: muestra,
            peso_nacimiento: pesonaci,
            transfusion: transfucion,
            fecha: fechatrans,
            antibioticos: antibioticos,
            id_centros: idcentro
        })
    });
    if (response.ok) {
        callback();
    }
}