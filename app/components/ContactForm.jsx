import { useState } from "react"

export default function Form() {
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""
    })

    const [status, setStatus] = useState({
        type: "",
        message: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
              type: "error",
              message: "Veuillez remplir tous les champs du formulaire."
            });
            return;
          }

        // Validation de l'adresse e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
        setStatus({
            type: "error",
            message: "Veuillez saisir une adresse e-mail valide."
        });
        return;
        }

        // Validation de la longueur minimale du message
        if (formData.message.length < 10) {
            setStatus({
            type: "error",
            message: "Le message doit contenir au moins 10 caractères."
            });
            return;
        }

        // Envoi des données au serveur
        try {
            // Envoyez les données du formulaire à l'API
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setStatus({
                    type: "success",
                    message: "Email envoyé avec succès!"
                });
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                setStatus({
                    type: "error",
                    message: "Erreur lors de l'envoi de l'e-mail. Veuillez réessayer."
                })
            }
        } catch (error) {
            console.error('Error in POST request:', error);
        }
    };

    return (
        <form className="flex flex-col" onSubmit={handleSubmit}>
            <label className="mb-2">Name</label>
            <input className="mb-5 pl-2 h-10 border-2 border-[#8AC4CA] rounded-xl" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} name="name" />
            <label className="mb-2">Email</label>
            <input className="mb-5 pl-2 h-10 border-2 border-[#8AC4CA] rounded-xl" type="text" placeholder="john@doe.com" value={formData.email} onChange={handleChange} name="email" />
            <label className="mb-2">Message</label>
            <textarea className="resize-none pl-2 pt-2 h-32 border-2 border-[#8AC4CA] rounded-xl" type="text" placeholder="Enter your message" value={formData.message} onChange={handleChange} name="message" />
            <button className="h-11 mt-7 font-bold text-[#F1EEE9] bg-[#FC9A2F] rounded-xl" type="submit">Send</button>
        </form>
    )
}