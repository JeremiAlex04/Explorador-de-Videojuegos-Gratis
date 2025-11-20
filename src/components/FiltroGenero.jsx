const FiltroGenero = ({ value, onChange }) => {
    return (
        <select
            className="form-select"
            name="genero"
            value={value}
            onChange={onChange}
        >
            <option value="">Todos los géneros</option>
            <option value="mmorpg">MMORPG</option>
            <option value="shooter">Shooter</option>
            <option value="strategy">Strategy</option>
            <option value="moba">MOBA</option>
            <option value="racing">Racing</option>
            <option value="sports">Sports</option>
            <option value="social">Social</option>
            <option value="sandbox">Sandbox</option>
            <option value="open-world">Open World</option>
            <option value="survival">Survival</option>
            <option value="pvp">PvP</option>
            <option value="pve">PvE</option>
            <option value="pixel">Pixel</option>
            <option value="voxel">Voxel</option>
            <option value="zombie">Zombie</option>
            <option value="turn-based">Turn-Based</option>
            <option value="first-person">First-Person</option>
            <option value="third-person">Third-Person</option>
            <option value="top-down">Top-Down</option>
            <option value="tank">Tank</option>
            <option value="space">Space</option>
            <option value="sailing">Sailing</option>
            <option value="side-scroller">Side-Scroller</option>
            <option value="superhero">Superhero</option>
            <option value="permadeath">Permadeath</option>
            <option value="card">Card</option>
        </select>
    );
};

export default FiltroGenero;
