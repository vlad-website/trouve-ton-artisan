import StepsList from "../../components/steps/StepsList";
import TopArtisans from "../../components/artisan/TopArtisans";
import Seo from "../../components/Seo";


export default function Home() {
    return (
        <>
            <Seo
                title="Trouve ton artisan - Accueil"
                description="Trouvez un artisan en Auvergne-Rhône-Alpes, consultez sa fiche et contactez-le facilement."
            />
            
            <div className="home">
                <StepsList />
                <TopArtisans />
            </div>
        </>
    );
};