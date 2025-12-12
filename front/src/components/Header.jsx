import { NavLink } from "react-router-dom";

export default function Header() {
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
        </header>
    );
}