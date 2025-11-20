import { useState, useCallback } from "react";
import BarraFiltros from "./components/BarraFiltros";
import ListaJuegos from "./components/ListaJuegos";
import DetalleJuego from "./components/DetalleJuego";
import { useJuegos } from "./hooks/useJuegos";

function App() {
  const [filtros, setFiltros] = useState({
    busqueda: "",
    genero: "",
    plataforma: "",
  });

  const [inputFiltros, setInputFiltros] = useState({
    busqueda: "",
    genero: "",
    plataforma: "",
  });


  const [mostrarModalDetalles, setMostrarModalDetalles] = useState(false);
  const [idJuegoSeleccionado, setIdJuegoSeleccionado] = useState(null);


  const { filtrados, cargando, error } = useJuegos({...filtros,
    limite: (filtros.busqueda || filtros.genero || filtros.plataforma) ? undefined : 10
  });

  const handleBuscar = useCallback(() => {
    setFiltros(inputFiltros);
  }, [inputFiltros]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputFiltros((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCardClick = useCallback((id) => {
    setIdJuegoSeleccionado(id);
    setMostrarModalDetalles(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setMostrarModalDetalles(false);
    setIdJuegoSeleccionado(null);
  }, []);

  return (
    <div className="min-vh-100 bg-gradient bg-light">
      <header className="bg-dark bg-gradient text-white py-5 mb-4 shadow" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-2">
                <i className="bi bi-controller me-3 text-warning"></i>
                Buscador de Juegos Gratis
              </h1>
              <p className="lead mb-0 opacity-75">
                Descubre miles de juegos gratuitos y encuentra tu próximo favorito
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container py-4">
        <BarraFiltros
          filtros={inputFiltros}
          onInputChange={handleInputChange}
          onBuscar={handleBuscar}
          cargando={cargando}
        />
        <ListaJuegos
          juegos={filtrados}
          cargando={cargando}
          error={error}
          onCardClick={handleCardClick}
        />
      </div>

      {mostrarModalDetalles && (
        <DetalleJuego
          gameId={idJuegoSeleccionado}
          onClose={handleCloseModal}
          show={mostrarModalDetalles}
        />
      )}
    </div>
  );
}

export default App;
