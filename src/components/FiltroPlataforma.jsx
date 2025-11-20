const FiltroPlataforma = ({ value, onChange }) => {
    return (
        <select
            className="form-select"
            name="plataforma"
            value={value}
            onChange={onChange}
        >
            <option value="">Todas las plataformas</option>
            <option value="pc">PC</option>
            <option value="browser">Browser</option>
        </select>
    );
};

export default FiltroPlataforma;