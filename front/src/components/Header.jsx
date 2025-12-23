import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Header() {
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        const value = term.trim();
        if (!value) return;
        navigate(`/recherche?nom=${encodeURIComponent(value)}`);
        setTerm("");
    }

    return (
        <header className="header">
            <div className="header_logo">Trouve ton artisan</div>

            <nav className="header_nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/categories/1">Bâtiment</NavLink>
                <NavLink to="/categories/2">Services</NavLink>
                <NavLink to="/categories/3">Fabrication</NavLink>
                <NavLink to="/categories/4">Alimentation</NavLink>
            </nav>

            <form className="header_search" onSubmit={handleSearch}>
                <input
                    type="search"
                    placeholder="Rechercher un artisan"
                    className="search__input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    aria-label="Rechercher un artisan par nom"
                />
                <span className="search__icon">🔍</span>
            </form>
        </header>
    );
}