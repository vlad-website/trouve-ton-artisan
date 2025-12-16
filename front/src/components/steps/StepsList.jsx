import "../../styles/steps.css";
import StepItem from "./StepItem";

export default function StepsList() {
    const steps = [
        { number: "1", title: "Choisir la catégorie", text: "Choisissez la catégorie d'artisanat dans le menu.", icon: "🧭" },
        { number: "2", title: "Choisir un artisan", text: "Sélectionnez un artisan dans la liste.", icon: "👤" },
        { number: "3", title: "Le contacter", text: "Contactez-le via le formulaire.", icon: "✉️" },
        { number: "4", title: "Réponse sous 48h", text: "Une réponse sera apportée sous 48h.", icon: "⏱️" },  
    ];

    return (
        <section className="steps">
            <h2 className="steps_title">Comment trouver mon artisan ?</h2>

            <div className="steps_container">
                <div className="steps_list">
                    {steps.map((s) => (
                        <StepItem
                            key={s.number}
                            number={s.number}
                            title={s.title}
                            text={s.text}
                            icon={s.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}