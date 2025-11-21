const URL_API_JUEGOS = "/api/games";
const URL_API_DETALLE = "/api/game";

/**
 * Obtener lista de juegos
 * @param {Object} filtros
 * @param {string} filtros.genero
 * @param {string} filtros.plataforma
 */
export const obtenerJuegos = async ({ genero, plataforma }) => {
    try {
        const url = new URL(URL_API_JUEGOS, window.location.origin);

        if (genero) url.searchParams.append("category", genero);
        if (plataforma) url.searchParams.append("platform", plataforma);

        console.log("URL solicitada:", url.toString());

        const respuesta = await fetch(url.toString());

        if (!respuesta.ok) {
            throw new Error(`Error HTTP! estado: ${respuesta.status}`);
        }

        const data = await respuesta.json();
        return { data, error: null };

    } catch (error) {
        console.error("Error al obtener juegos:", error);
        return { data: [], error: error.message };
    }
};


/**
 * Obtener detalle de un juego por ID
 */
export const obtenerDetalleJuego = async (id) => {
    try {
        const url = new URL(URL_API_DETALLE, window.location.origin);
        url.searchParams.append("id", id);

        console.log("URL de detalle:", url.toString());

        const respuesta = await fetch(url.toString());

        if (!respuesta.ok) {
            throw new Error(`Error HTTP! estado: ${respuesta.status}`);
        }

        const data = await respuesta.json();
        return { data, error: null };

    } catch (error) {
        console.error(`Error al obtener detalle del juego ${id}:`, error);
        return { data: null, error: error.message };
    }
};
