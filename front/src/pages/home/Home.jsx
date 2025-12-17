import StepsList from "../../components/steps/StepsList";
import TopArtisans from "../../components/artisan/TopArtisans";


import "../../styles/home.css";

export default function Home() {
    return (
        <div className="home">
            <StepsList />
            <TopArtisans />
        </div>
    );
};