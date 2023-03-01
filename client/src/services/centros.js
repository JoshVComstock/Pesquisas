const baseUrl =
    import.meta.env.VITE_BACKEND_URL

export const getcentros = async () => {
    try {
        const response = await fetch(`${baseUrl}centros`, {
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