import { Link } from "react-router-dom";
import Seo from "../components/Seo";


export default function PlaceholderPage({ title, subtitle, image }) {
    return (
        <>
            <Seo
                title={`${title} – Trouve ton artisan`}
                description={`${title}. Cette page est actuellement en cours de construction sur la plateforme Trouve ton artisan.`}
            />

            <section className="placeholder-page">
                <h1 className="placeholder-page__title">{title}</h1>
                
                {image && (
                    <img
                        src={image}
                        alt=""
                        className="placeholder-page__image"
                        aria-hidden="true"
                    />
                )}


                {subtitle && (
                    <p className="placeholder-page__subtitle">{subtitle}</p>
                )}

                <Link to="/" className="placeholder-page__btn">
                Retour à l'Accueil
                </Link>
            </section>
        </>
    );
}