import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneArtisan } from "../../services/api";

import ContactForm from "../../components/ContactForm"

import StarRating from "../../components/StarRating";

import "../../styles/artisan-detail.css";

export default function ArtisanDetail() {
  const { id } = useParams();

  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    loadOneArtisan(id);
  }, [id]);

  async function loadOneArtisan(artisanId) {
      const data = await getOneArtisan(artisanId);
      setArtisan(data);
  }

  if (!artisan) {
    return <p>Chargement...</p>;
  }

  return (
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
  );
}

