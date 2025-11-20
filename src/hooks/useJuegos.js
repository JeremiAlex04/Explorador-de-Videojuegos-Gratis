import { useState, useEffect } from "react";
import { obtenerJuegos } from "../services/juegosServices";

export const useJuegos = ({ busqueda, genero, plataforma, limite }) => {
    const [juegos, setJuegos] = useState([]);
    const [filtrados, setFiltrados] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargar = async () => {
            setCargando(true);
            setError(null);

            const { data, error } = await obtenerJuegos({ genero, plataforma });

            if (error) {
                setError(error);
                setJuegos([]);
            } else {
                setJuegos(data);
            }

            setCargando(false);
        };
        cargar();
    }, [genero, plataforma]);

    useEffect(() => {
        let juegosTemporales = Array.isArray(juegos) ? [...juegos] : [];

        if (busqueda && busqueda.trim()) {
            const busquedaNormalizada = busqueda.trim().toLowerCase();
            juegosTemporales = juegosTemporales.filter(j => {
                const titulo = j.title ? j.title.toLowerCase() : '';
                return titulo.includes(busquedaNormalizada);
            });
        }

        if (limite) {
            juegosTemporales = juegosTemporales.slice(0, limite);
        }

        setFiltrados(juegosTemporales);
    }, [busqueda, juegos, limite]);

    return { filtrados, cargando, error };
};