export default function StepItem({ number, title, text, icon }) {
    return (
        <article className="step">
            <div className="step_left">
                <h2 className="step_step">Étape {number}</h2>
            </div>

            <div className="step_center">
                <h3 className="step_title">{title}</h3>
                <p className="step_text">{text}</p>
            </div>

            <div className="step_right" aria-hidden="true">
                {icon}
            </div>
        </article>
    );
}