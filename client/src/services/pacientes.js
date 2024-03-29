const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getPacientes = async () => {
    try {
        const response = await fetch(`${baseUrl}pacientes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response;
    } catch (error) {
        console.log(error);
    }
};
export const getHistorial = async (id) => {
    try {
        const response = await fetch(`${baseUrl}pacientes/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        return response;
    } catch (error) {
        console.log(error);
    }
};