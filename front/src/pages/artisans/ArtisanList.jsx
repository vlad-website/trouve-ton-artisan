import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { getArtisansByCategorie } from "../../services/api";
import ArtisanCard from "../../components/artisan/ArtisanCard";


export default function ArtisanList() {
  const { id } = useParams();
  const CATEGORIES = {
    1: "Artisans du bâtiment",
    2: "Artisans des services",
    3: "Artisans de la fabrication",
    4: "Artisans de l'alimentation",
  };

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      loadArtisansByCategorie(id);
  }, [id]);
  
  async function loadArtisansByCategorie(categorieId) {
    try {
      const data = await getArtisansByCategorie(categorieId);
      setArtisans(data);
    } catch (error) {
      setArtisans([]);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!artisans || artisans.length === 0) {
    return <Navigate to="/404" replace />;
  }

  return (
    <section className="artisans-categorie">
      <h1 className="artisans-categorie__title">{CATEGORIES[id]}</h1>

      <div className="top-artisans_grid">
        {artisans.map((art) => (
          <ArtisanCard
            key={art.id_artisan}
            artisan={art}
          />
        ))}
      </div>
    </section>
  )
}