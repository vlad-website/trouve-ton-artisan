import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategories } from "../services/api";


export default function Header() {
    
    /* STATE */
    const [term, setTerm] = useState("");
    const [categories, setCategories] = useState([]);
    
    const navigate = useNavigate();

    /* DATA */
    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {
        const data = await getCategories();
        setCategories(data);
    }

    /* SEARCH */
    function handleSearch(e) {
        e.preventDefault();

        if (!term.trim()) return;

        navigate(`/recherche?nom=${encodeURIComponent(term)}`);
        setTerm("");
        closeMenu();
    }

    /* BURGER */
    function closeMenu() {
        const menu = document.getElementById("mainNavbar");

        if (menu && menu.classList.contains("show")) {
        menu.classList.remove("show");
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            const menu = document.getElementById("mainNavbar");
            const toggle = document.querySelector(".navbar-toggler");

            if (
            menu &&
            menu.classList.contains("show") &&
            !menu.contains(event.target) &&
            !toggle.contains(event.target)
            ) {
            menu.classList.remove("show");
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


    return (
        <nav className="navbar navbar-expand-lg tta-navbar border-bottom">
            <div className="container">

                {/* LOGO */}
                <NavLink className="navbar-brand d-flex align-items-center" href="/">
                    <img
                        src="/images/Logo.png"
                        alt="Trouve ton artisan"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </NavLink>

                {/* BURGER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENU */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <div className="navbar-nav ms-auto align-items-lg-center">

                        <NavLink className="nav-link" to="/" onClick={closeMenu}>
                            Accueil
                        </NavLink>
                        
                        {/* CATEGORIES */}
                        {categories.map((cat) => (
                            <NavLink
                                key={cat.id_categorie}
                                className="nav-link"
                                to={`/categories/${cat.slug}`}
                                onClick={closeMenu}
                            >
                                {cat.nom}
                            </NavLink>
                        ))}

                        {/* SEARCH */}
                        <form className="d-flex ms-lg-3 mt-3 mt-lg-0" role="search" onSubmit={handleSearch}>
                            <div className="tta-search-wrap">
                                <input
                                className="form-control tta-search"
                                type="search"
                                placeholder="Rechercher un artisan"
                                aria-label="Rechercher un artisan"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                />
                                <span className="tta-search-icon" aria-hidden="true">🔍</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}