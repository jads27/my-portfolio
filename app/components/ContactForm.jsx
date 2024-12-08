import { useLanguage } from '../../config/contexts/language_context';

import { useState } from "react"
import emailjs from "emailjs-com"

export default function Form({ updateStatus }) { 
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language] 

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""
    })

    const [status, setStatus] = useState({
        type: "",
        message: ""
    })
    
    const [formSubmitted, setFormSubmitted] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        setFormSubmitted(false)
        }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateStatus({ type: "", message: "" })
        setStatus({ type: ""})

        setFormSubmitted(true)

        if (!formData.name || !formData.email || !formData.message ) {
        return;
          }

        if (!emailRegex.test(formData.email)) {
        return;
        }

        if (formData.message.length < 10) {
        return;
        }

        if (!formData.message.trim() || !formData.name.trim()) {
        return
        }

        const emailParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          };

        try {
            const response = await emailjs.send(
                "service_u9b0ntj",
                "template_i8lele8",
                emailParams,
                "hUDnQHjKkKj8umrSk"
            )

            if (response.status === 200) {
                updateStatus({
                    type: "success",
                    key: `<p>${currentTranslations.contact.form.successMessage}</p>`
                })
                setStatus({
                    type: "success",
                })
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                })
            } else {
                updateStatus({
                    type: "error",
                    key: `<p>${currentTranslations.contact.form.errorMessage}<a class="underline" href="mailto:jalvesdsilva27@gmail.com"> jalvesdsilva27@gmail.com</a></p>.`
                })
                setStatus({
                    type: "error",
                });
            }
        } catch (error) {
            console.error('Error in POST request:', error);
            updateStatus({
              type: "error",
              key: `<p>${currentTranslations.contact.form.errorMessage}<a class="underline" href="mailto:jalvesdsilva27@gmail.com"> jalvesdsilva27@gmail.com</a></p>.`,
            });
            setStatus({
                type: "error",
            });
          }
        };
    return (
        <>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label className="mt-5 mb-2">{currentTranslations.contact.form.name}</label>
                <input className={`pl-2 h-10 border-2 border-secondary rounded-xl dark:bg-[#000000] ${formSubmitted && !formData.name.trim() ? "border-red-500" : ""}`} type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} name="name" />
                {formSubmitted && status.type !== "success" && !formData.name.trim() && <p className="text-red-500 mb-2">{currentTranslations.contact.form.requiredField}</p>}
                <label className="mt-5 mb-2">{currentTranslations.contact.form.email}</label>
                <input className={`pl-2 h-10 border-2 border-secondary rounded-xl dark:bg-[#000000] ${(formSubmitted && !formData.email) || (formSubmitted && !emailRegex.test(formData.email)) ? "border-red-500" : ""}`} type="text" placeholder="john@doe.com" value={formData.email} onChange={handleChange} name="email" />
                {formSubmitted && status.type !== "success" && !formData.email && <p className="text-red-500 mb-2">{currentTranslations.contact.form.requiredField}</p>}
                {formSubmitted && status.type !== "success" && !emailRegex.test(formData.email) && formData.email && <p className="text-red-500 mb-2">{currentTranslations.contact.form.invalidEmail}</p>}
                <label className="mt-5 mb-2">{currentTranslations.contact.form.message}</label>
                <textarea className={`resize-none pl-2 pt-2 h-32 border-2 border-secondary rounded-xl dark:bg-[#000000] ${formSubmitted && (formData.message.trim().length < 10 || !formData.message.trim()) ? "border-red-500" : ""}`} type="text" placeholder={currentTranslations.contact.form.enterYourMessage} value={formData.message} onChange={handleChange} name="message" />
                {formSubmitted && status.type !== "success" && !formData.message.trim() && <p className="text-red-500 mb-2">{currentTranslations.contact.form.requiredField}</p>}
                {formSubmitted && status.type !== "success" && formData.message.trim().length < 10 && formData.message.trim().length > 0 && <p className="text-red-500 mb-2">{currentTranslations.contact.form.messageLengthError}</p>}
                <button className="h-11 mt-7 font-bold text-[#F1EEE9] bg-primary rounded-xl" type="submit">{currentTranslations.contact.form.send}</button>
            </form>
        </>
    )
}