import { useState, useEffect } from "react";
import { getTopArtisans } from "../../services/api";
import ArtisanCard from "./ArtisanCard";

import "../../styles/artisans.css"

export default function TopArtisans() {

    const [topArtisans, setTopArtisans] = useState([]);

    useEffect(() => {
        loadTopArtisans();
    }, []);

    async function loadTopArtisans() {
        const data = await getTopArtisans();
        setTopArtisans(data);
    }

    return (
        <section className="top-artisans">
            <h2 className="top-artisans__title">Les artisans du mois</h2>

            <div className="top-artisans__grid">
                {topArtisans.map((art) => (
                    <ArtisanCard
                        key={art.id_artisan}
                        artisan={art}
                    />
                ))}
            </div>
        </section>
    )
}