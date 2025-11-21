import CardJuego from "./CardJuego";

const ListaJuegos = ({ juegos, cargando, error, onCardClick }) => {
    if (error)
        return (
            <div className="alert alert-danger alert-dismissible fade show shadow-sm" role="alert">
                <h4 className="alert-heading">
                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                    Error al cargar juegos
                </h4>
                <p className="mb-0">{error}</p>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        );

    if (cargando)
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-success mb-3" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="text-muted fs-5">
                    <i className="bi bi-hourglass-split me-2 text-success"></i>
                    Cargando juegos...
                </p>
            </div>
        );

    if (juegos.length === 0)
        return (
            <div className="card border-0 shadow-sm">
                <div className="card-body text-center py-5">
                    <i className="bi bi-inbox display-1 text-muted mb-3"></i>
                    <h4 className="text-muted mb-3">No se encontraron juegos</h4>
                    <p className="text-muted mb-0">
                        Intenta ajustar tus filtros de búsqueda para encontrar más resultados.
                    </p>
                </div>
            </div>
        );

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="mb-0">
                    <i className="bi bi-grid-3x3-gap me-2 text-info"></i>
                    Resultados: <span className="badge bg-info">{juegos.length}</span>
                </h3>
            </div>
            <div className="row g-4">
                {juegos.map(juego => (
                    <div key={juego.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                        <CardJuego juego={juego} onCardClick={onCardClick} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ListaJuegos;
