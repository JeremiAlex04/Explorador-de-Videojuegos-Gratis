import { useState, useEffect } from 'react';
import { traducirDescripcion } from '../services/traductorService';

const CardJuego = ({ juego, onCardClick }) => {
    const [descripcionTraducida, setDescripcionTraducida] = useState('');
    const [traduciendo, setTraduciendo] = useState(false);

    if (!juego) {
        return null;
    }

    const {
        id,
        thumbnail,
        title,
        genre,
        platform,
        short_description,
        game_url
    } = juego;

    useEffect(() => {
        const traducir = async () => {
            if (short_description) {
                setTraduciendo(true);
                try {
                    const traducido = await traducirDescripcion(short_description);
                    const truncado = traducido.substring(0, 90) + (traducido.length > 90 ? '...' : '');
                    setDescripcionTraducida(truncado);
                } catch (error) {
                    const truncado = short_description.substring(0, 90) + (short_description.length > 90 ? '...' : '');
                    setDescripcionTraducida(truncado);
                }
                setTraduciendo(false);
            } else {
                setDescripcionTraducida('');
            }
        };
        traducir();
    }, [short_description]);

    return (
        <div
            className="card h-100 shadow-sm border-0 overflow-hidden position-relative"
            onClick={() => onCardClick(id)}
            style={{ cursor: 'pointer', transition: 'all 0.3s ease-in-out' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 0.5rem 1.5rem rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
            }}
        >
            <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                <img
                    src={thumbnail || 'placeholder.jpg'}
                    className="card-img-top h-100 w-100 object-fit-cover"
                    alt={`Portada de ${title || 'Juego'}`}
                    style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-2">
                    {platform && (
                        <span className="badge bg-dark bg-opacity-75 px-2 py-1">
                            <i className="bi bi-device-hdd me-1"></i>
                            {platform}
                        </span>
                    )}
                </div>
            </div>

            <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold mb-3 text-truncate" title={title}>
                    {title || 'Título desconocido'}
                </h5>

                <div className="mb-3">
                    {genre && (
                        <span className="badge bg-success me-1 px-2 py-1">
                            <i className="bi bi-tag me-1"></i>
                            {genre}
                        </span>
                    )}
                </div>

                <p className="card-text flex-grow-1 text-muted small mb-3" style={{ minHeight: '60px' }}>
                    {traduciendo ? (
                        <span className="text-muted">
                            <i className="bi bi-arrow-repeat me-1" style={{ animation: 'spin 1s linear infinite' }}></i>
                            Traduciendo...
                        </span>
                    ) : (
                        descripcionTraducida || 'Sin descripción disponible.'
                    )}
                </p>
            </div>
            <div className="card-footer bg-white border-top">
                <div className="d-grid gap-2">
                    <button
                        className="btn btn-outline-info btn-sm"
                        onClick={(e) => {
                            e.stopPropagation();
                            onCardClick(id);
                        }}
                    >
                        <i className="bi bi-info-circle me-2"></i>
                        Ver Detalles
                    </button>
                    {game_url && (
                        <a
                            href={game_url}
                            className="btn btn-success btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="bi bi-play-circle me-2"></i>
                            Jugar Ahora
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardJuego;
