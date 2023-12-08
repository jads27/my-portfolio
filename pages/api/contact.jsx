import transporter from "../../config/nodemailer-config"

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Validez les données du formulaire ici
        
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: "jalvesdsilva27@gmail.com",
            subject: "Nouveau message du formulaire",
            text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
        }

        try {
            await transporter.sendMail(mailOptions)
            res.status(200).json({ succes: true, message: "Message sent successfully !" })
        } catch (error) {
            console.error("Error sending message :", error)
            res.status(500).json({ success: false, error: "Error sending message."})
        }
    } else {
        res.status(405).json({ error: "Method not allowed"})
    }
}