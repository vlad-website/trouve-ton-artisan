import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { searchArtisans } from "../services/api"
import ArtisanCard from "../components/artisan/ArtisanCard";


export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("nom");

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) return;

        async function fetchResults() {
            setLoading(true);
            const data = await searchArtisans(query);
            setResults(data);
            setLoading(false);
        }

        fetchResults();
    }, [query]);

    if (!query) {
        return <p>Veuillez saisir un terme de recherche.</p>;
    }

    if (loading) {
        return <p>Recherche en cours...</p>;
    }

    return (
        <section className="search-results">
            <h1>Résultats pour « {query} »</h1>

            {results.length === 0 ? (
                <p>Aucun artisan trouvé.</p>
            ) : (
                <div className="top-artisans_grid">
                    {results.map((art) => (
                        <ArtisanCard key={art.id_artisan} artisan={art} />
                    ))}
                </div>
            )}
        </section>
    )
}