const BuscadorTitulo = ({ value, onChange }) => {
    return (
        <div className="input-group">
            <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-search text-muted"></i>
            </span>
            <input
                type="text"
                className="form-control border-start-0"
                placeholder="Ej: World of Warcraft..."
                name="busqueda"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default BuscadorTitulo;
