import { useState } from "react";
import "../styles/contact-form.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        objet: "",
        message: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Message envoyé");
        setFormData({
            nom: "",
            email: "",
            objet: "",
            message: "",
        });
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form__title">Contactez l'artisan</h2>

            <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="objet"
                placeholder="Objet"
                value={formData.objet}
                onChange={handleChange}
            />

            <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
            />

            <button type="submit">Envoyer</button>
        </form>
    );
}