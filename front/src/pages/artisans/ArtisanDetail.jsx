import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneArtisan } from "../../services/api";
import { Navigate } from "react-router-dom";

import ContactForm from "../../components/ContactForm"
import StarRating from "../../components/StarRating";
import Seo from "../../components/Seo";



export default function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOneArtisan(id);
  }, [id]);

  async function loadOneArtisan(artisanId) {
    try {
      const data = await getOneArtisan(artisanId);
      setArtisan(data);
    } catch (error) {
      setArtisan(null);
    } finally {
      setLoading(false);
    }

  }

  if (loading) {
    return <p>Chargement...</p>
  }

  if (!artisan || !artisan.id_artisan) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <Seo
        title={`${artisan.nom} - ${artisan.Specialite?.nom} à ${artisan.localisation}`}
        description={`Découvrez ${artisan.nom}, artisan spécialisé en ${artisan.Specialite?.nom} à ${artisan.localisation}. Contactez-le facilement via notre plateforme.`}
      />

      <section className="artisan-detail">
        <h1 className="artisan-detail__title">{artisan.nom}</h1>

        <div className="artisan-detail__card">
          <div className="artisan-detail__image">
            <img
              src={`/images/artisans-img/${artisan.image}`}
              alt={artisan.nom}
            />
          </div>

          <div className="artisan-detail__infos">
            <p className="artisan-detail__specialite">{artisan.Specialite?.nom}</p>
            
            <p className="artisan-detail__localisation">{artisan.localisation}</p>
            
            <div className="artisan-detail__rating">
              <StarRating value={Number(artisan.note)} />
            </div>
            
            <p className="artisan-detail__propos"><strong>A propos</strong></p>
            
            <p>{artisan.description}</p>
            {artisan.site_web && (
              <p className="artisan-detail__website">
                <a
                  href={artisan.site_web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {artisan.site_web}
                </a>
              </p>
            )}
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  );
}

