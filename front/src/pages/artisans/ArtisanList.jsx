import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getArtisansByCategorie } from "../../services/api";
import ArtisanCard from "../../components/artisan/ArtisanCard";
import { Navigate } from "react-router-dom";
import Seo from "../../components/Seo";

export default function ArtisanList() {
  const { slug } = useParams();

  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      loadArtisansByCategorie(slug);
  }, [slug]);
  
  async function loadArtisansByCategorie(categorieSlug) {
    try {
      const data = await getArtisansByCategorie(categorieSlug);
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

  const categoryName =
    artisans[0]?.Specialite?.Categorie?.nom || slug;

  return (
    <>
      <Seo
        title={`Trouve ton artisan - ${categoryName}`}
        description={`Liste des artisans : ${categoryName}. Consultez les fiches et contactez un artisan.`}
      />

      <section className="artisans-categorie">
        <h1 className="artisans-categorie__title">Artisans - {slug}</h1>

        <div className="top-artisans_grid">
          {artisans.map((art) => (
            <ArtisanCard
              key={art.id_artisan}
              artisan={art}
            />
          ))}
        </div>
      </section>
    </>
  )
}