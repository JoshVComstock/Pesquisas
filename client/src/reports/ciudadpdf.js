const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getciudadpdf = async () => {
    try {
        const response = await fetch(`${baseUrl}Ciudades-pdf`, {
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