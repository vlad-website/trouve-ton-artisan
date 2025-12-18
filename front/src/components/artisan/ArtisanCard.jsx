import StarRating from "../../components/StarRating";

export default function ArtisanCard({ artisan }) {
    return (
        <article className="artisan-card">

            {/* Image */}
            <div className="artisan-card__image">
                <img
                    src={`/images/artisans-img/${artisan.image}`}
                    alt={artisan.nom}
                />
            </div>

            {/* Infos */}
            <div className="artisan-card__content">
                <h3 className="artisan-card__name">{artisan.nom}</h3>

                <p className="artisan-card__specialite">
                    {artisan.Specialite?.nom}
                </p>

                <p className="artisan-card__ville">
                    {artisan.localisation}
                </p>

                <p className="artisan-card__note">
                    <StarRating value={Number(artisan.note)} />
                </p>
            </div>
        </article>
    );
}