import React, { useState, useEffect } from 'react';
import { obtenerDetalleJuego } from '../services/juegosServices';
import { traducirDescripcion } from '../services/traductorService';

const DetalleJuego = ({ gameId, onClose, show }) => {
  const [juego, setJuego] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [descripcionTraducida, setDescripcionTraducida] = useState('');
  const [traduciendoDesc, setTraduciendoDesc] = useState(false);

  useEffect(() => {
    const cargarDetalleJuego = async () => {
      if (!gameId) {
        setJuego(null);
        setCargando(false);
        return;
      }

      setCargando(true);
      setError(null);
      setJuego(null);

      const { data, error } = await obtenerDetalleJuego(gameId);

      if (error) {
        setError(error);
      } else {
        setJuego(data);
        if (data?.description) {
          setTraduciendoDesc(true);
          try {
            const traducido = await traducirDescripcion(data.description);
            setDescripcionTraducida(traducido);
          } catch (error) {
            setDescripcionTraducida(data.description);
          }
          setTraduciendoDesc(false);
        }
      }
      setCargando(false);
    };

    cargarDetalleJuego();

  }, [gameId]);

  if (!show) {
    return null;
  }

  return (
    <>
      <div 
        className="modal-backdrop fade show" 
        onClick={onClose}
        style={{ zIndex: 1040 }}
      ></div>
      <div 
        className="modal fade show" 
        style={{ display: 'block', zIndex: 1050 }} 
        tabIndex="-1" 
        role="dialog" 
        aria-labelledby="gameDetailsModalLabel" 
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content shadow-lg border-0">
            <div className="modal-header text-white" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <h5 className="modal-title fw-bold" id="gameDetailsModalLabel">
                <i className="bi bi-info-circle me-2"></i>
                {juego?.title || 'Detalles del Juego'}
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                aria-label="Close" 
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body p-4">
              {cargando && (
                <div className="text-center py-5">
                  <div className="spinner-border text-info mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Cargando...</span>
                  </div>
                  <p className="text-muted">Cargando detalles del juego...</p>
                </div>
              )}

              {error && (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2 fs-4"></i>
                  <div>
                    <strong>Error:</strong> {error}
                  </div>
                </div>
              )}

              {!cargando && !error && !juego && (
                <div className="alert alert-info d-flex align-items-center" role="alert">
                  <i className="bi bi-info-circle-fill me-2 fs-4"></i>
                  <div>No se encontró el juego.</div>
                </div>
              )}

              {!cargando && !error && juego && (
                <div className="row g-4">
                  <div className="col-md-5">
                    <div className="position-relative">
                      <img 
                        src={juego.thumbnail || 'placeholder.jpg'} 
                        className="img-fluid rounded shadow" 
                        alt={`Portada de ${juego.title || 'Juego'}`}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      {juego.platform && (
                        <div className="position-absolute top-0 end-0 m-2">
                          <span className="badge bg-dark bg-opacity-75 px-3 py-2">
                            <i className="bi bi-device-hdd me-1"></i>
                            {juego.platform}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-7">
                    <h2 className="fw-bold mb-3">{juego.title || 'Título desconocido'}</h2>
                    
                    <div className="mb-4">
                      {juego.genre && (
                        <span className="badge bg-success me-2 mb-2 px-3 py-2 fs-6">
                          <i className="bi bi-tag me-1"></i>
                          {juego.genre}
                        </span>
                      )}
                    </div>

                    <div className="list-group list-group-flush mb-4">
                      {juego.developer && (
                        <div className="list-group-item border-0 px-0 py-2">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-code-slash text-info me-3 fs-5"></i>
                            <div>
                              <small className="text-muted d-block">Desarrollador</small>
                              <strong>{juego.developer}</strong>
                            </div>
                          </div>
                        </div>
                      )}
                      {juego.publisher && (
                        <div className="list-group-item border-0 px-0 py-2">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-building text-warning me-3 fs-5"></i>
                            <div>
                              <small className="text-muted d-block">Editor</small>
                              <strong>{juego.publisher}</strong>
                            </div>
                          </div>
                        </div>
                      )}
                      {juego.release_date && (
                        <div className="list-group-item border-0 px-0 py-2">
                          <div className="d-flex align-items-center">
                            <i className="bi bi-calendar-event text-danger me-3 fs-5"></i>
                            <div>
                              <small className="text-muted d-block">Fecha de lanzamiento</small>
                              <strong>{juego.release_date}</strong>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {(juego.description || descripcionTraducida) && (
                      <div className="mb-4">
                        <h5 className="fw-semibold mb-3">
                          <i className="bi bi-file-text me-2 text-success"></i>
                          Descripción
                        </h5>
                        {traduciendoDesc ? (
                          <div className="text-center py-3">
                            <div className="spinner-border spinner-border-sm text-success me-2" role="status">
                              <span className="visually-hidden">Traduciendo...</span>
                            </div>
                            <span className="text-muted">Traduciendo descripción...</span>
                          </div>
                        ) : (
                          <p className="text-muted lh-lg">{descripcionTraducida || juego.description}</p>
                        )}
                      </div>
                    )}

                    {juego.game_url && (
                      <a 
                        href={juego.game_url} 
                        className="btn btn-success btn-lg w-100 shadow-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-play-circle-fill me-2"></i>
                        Jugar Ahora
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer bg-light">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                <i className="bi bi-x-circle me-2"></i>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetalleJuego;