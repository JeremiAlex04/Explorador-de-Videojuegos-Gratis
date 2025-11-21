const URL_BASE_API = "/api/games";

export const obtenerJuegos = async ({ genero, plataforma }) => {

    const url = new URL(URL_BASE_API, window.location.origin);

    if (genero) {
        url.searchParams.append("category", genero);
    }
    if (plataforma) {
        url.searchParams.append("platform", plataforma);
    }

    try {
        const respuesta = await fetch(url.toString());
        if (!respuesta.ok) {
            const errorData = await respuesta.json().catch(() => null);
            const errorMessage = errorData?.status_message || `Error HTTP! estado: ${respuesta.status}`;
            throw new Error(errorMessage);
        }
        const data = await respuesta.json();
        return { data, error: null };
    } catch (error) {
        console.error("Error al obtener juegos:", error);
        return { data: [], error: error.message };
    }
};

export const obtenerDetalleJuego = async (id) => {
    const url = new URL("/api/game", window.location.origin);
    url.searchParams.append("id", id);

    try {
        const respuesta = await fetch(url.toString());
        if (!respuesta.ok) {
            const errorData = await respuesta.json().catch(() => null);
            const errorMessage = errorData?.status_message || `Error HTTP! estado: ${respuesta.status}`;
            throw new Error(errorMessage);
        }
        const data = await respuesta.json();
        return { data, error: null };
    } catch (error) {
        console.error(`Error al obtener detalle del juego ${id}:`, error);
        return { data: null, error: error.message };
    }
};

Este el servicio donde se consume la API
