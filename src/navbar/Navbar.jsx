import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="Navbar">
            <button>Menu</button>
            <input type="text" id="searchBar"/>
            <button>Sign in</button>
            <select>
                <option>EN</option>
                <option>ES</option>
            </select>
        </div>
    )
}