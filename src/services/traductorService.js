const traducirTexto = async (texto, idiomaDestino = 'es') => {
    if (!texto || typeof texto !== 'string') {
        return texto;
    }

    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${idiomaDestino}&dt=t&q=${encodeURIComponent(texto)}`;

        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error('Error en la traducción');
        }

        const data = await respuesta.json();

        if (data && data[0] && data[0][0] && data[0][0][0]) {
            return data[0][0][0];
        }

        return texto;
    } catch (error) {
        console.error('Error al traducir:', error);
        return texto;
    }
};

const cacheTraducciones = new Map();

export const traducirDescripcion = async (texto) => {
    if (!texto) return texto;

    if (cacheTraducciones.has(texto)) {
        return cacheTraducciones.get(texto);
    }

    const traducido = await traducirTexto(texto, 'es');
    cacheTraducciones.set(texto, traducido);

    return traducido;
};

