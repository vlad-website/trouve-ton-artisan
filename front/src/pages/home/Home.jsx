import { useState, useEffect } from "react";
import { getCategories, getTopArtisans } from "../../services/api";

export default function Home() {
    
    const [categories, setCategories] = useState([]);
    const [topArtisans, setTopArtisans] = useState([]);

    useEffect(() => {
        loadCategories();
        loadTopArtisans();
    }, []);

    async function loadCategories() {
        const data = await getCategories();
        setCategories(data);
    }

    async function loadTopArtisans() {
        const data = await getTopArtisans();
        setTopArtisans(data);
    }

    return (
        <div>
            <h1>Comment trouver mon artisan?</h1>

            <h2>Catégories</h2>
            <ul>
                {categories.map(cat => (
                    <li key={cat.id_categorie}>{cat.nom}</li>
                ))}
            </ul>

            <h2>Artisans du mois</h2>
            <ul>
                {topArtisans.map(art => (
                    <li key={art.id_artisan}>{art.nom} - {art.note}</li>
                ))}
            </ul>
        </div>
    );
};