import BuscadorTitulo from "./BuscadorTitulo";
import FiltroGenero from "./FiltroGenero";
import FiltroPlataforma from "./FiltroPlataforma";

const BarraFiltros = ({ filtros, onInputChange, onBuscar, cargando }) => {
    return (
        <div className="card border-0 shadow-lg mb-5">
            <div className="card-header text-white py-3" style={{ background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}>
                <h5 className="mb-0">
                    <i className="bi bi-funnel me-2"></i>
                    Filtros de Búsqueda
                </h5>
            </div>
            <div className="card-body p-4">
                <div className="row g-3 align-items-end">
                    <div className="col-md-4 col-lg-3">
                        <label className="form-label fw-semibold">
                            <i className="bi bi-search me-2 text-info"></i>
                            Título del Juego
                        </label>
                        <BuscadorTitulo value={filtros.busqueda} onChange={onInputChange} />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <label className="form-label fw-semibold">
                            <i className="bi bi-tags me-2 text-success"></i>
                            Género
                        </label>
                        <FiltroGenero value={filtros.genero} onChange={onInputChange} />
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <label className="form-label fw-semibold">
                            <i className="bi bi-device-hdd me-2 text-warning"></i>
                            Plataforma
                        </label>
                        <FiltroPlataforma value={filtros.plataforma} onChange={onInputChange} />
                    </div>
                    <div className="col-md-12 col-lg-3">
                        <button 
                            className="btn btn-success btn-lg w-100 shadow-sm" 
                            onClick={onBuscar} 
                            disabled={cargando}
                        >
                            {cargando ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Buscando...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-search me-2"></i>
                                    Buscar Juegos
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarraFiltros;
