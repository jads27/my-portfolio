const translations = {
    en: {
        navigation: { 
            home: "Home",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            language: "Français",
            lightMode: "Light mode",
            darkMode: "Dark mode"
        },
        home: {
            greetings: "Hello ! I'm",
            role: "Front-end Developer",
            description: "passionate about UI/UX, constantly exploring, creating, and driven by a thirst for learning and acquiring new skills."
        },
        skills: {
            title: "Skills",
            technologies: {
                title: "Technologies",   
                description: "I primarily focus on frontend development, excelling in technologies such as TypeScript, React, Next.js, and Tailwind CSS. My expertise lies in leveraging these tools to create efficient and dynamic user interfaces."
            },
            tools: {
                title: "Tools",
                description: "I've gained valuable experience with Figma and GitHub, enhancing my design and collaboration skills for well-rounded projects."
            }
        },
        projects: {
            title: "Projects",
            seeMore: "See More",
            modal: {
                details: "Details",
                stack: "Stack",
                year: "Year",
                viewCode: "View code",
                visitWebsite: "Visit website",
                kasaWebsite: {
                    title: "Front-end of the Kasa website",
                    description: {
                        part1: "Front-end of the Kasa website.",
                        part2: "Front-end development for an accommodation rental website using React.",
                        part3: "Creation of React components and state management."
                    }
                },
                bookiWebsite: {
                    title: "Responsive UI for Booki",
                    description: {
                        part1: "The Booki travel agency project aims to develop a user-friendly interface that enables users to easily search for and book accommodations and activities in their preferred city.",
                        part2: "Project completed as part of my OpenClassrooms training, where I was tasked with integrating the website's interface using only HTML and CSS."
                    }
                },
                sophieBluelPortfolioWebsite: {
                    title: "Portfolio for an Interior Designer",
                    description: {
                        part1: "This project was undertaken as part of my OpenClassrooms training, involving the front-end development for the portfolio of an interior designer.",
                        part2: "My responsibilities included creating the presentation page for the works, implementing the administrator login page, and designing the modal for adding new media."
                    }
                }
            }
        },
        contact: {
            title: "Contact me",
            workTogether: "Let's work together",
            contactText: {
                part1: "Feel free to contact me through this form or by",
                part2: " email"
            },
            socials: "// some socials",
            form: {
                name: "Name",
                email: "Email",
                message: "message",
                send: "Send",
                enterYourMessage: "Enter your message",
                requiredField: "This field is required",
                invalidEmail: "Please enter a valid email address.",
                messageLengthError: "The message must be at least 10 characters long.",
                errorMessage: "Error message",
                successMessage: "Message successfully sent"
            }
        }

    },
    fr: {
        navigation: {
          home: "Accueil",
          skills: "Compétences",
          projects: "Projets",
          contact: "Contact",
          language: "English",
          lightMode: "Mode clair",
          darkMode: "Mode sombre"
        },
        home: {
          greetings: "Bonjour ! Je suis",
          role: "Développeur Front-end",
          description:
            "passionné par l'UI/UX, explorant constamment, créant, et motivé par une soif d'apprendre et d'acquérir de nouvelles compétences."
        },
        skills: {
          title: "Compétences",
          technologies: {
            title: "Technologies",
            description:
              "Je me concentre principalement sur le développement front-end, excellant dans des technologies telles que TypeScript, React, Next.js et Tailwind CSS. Mon expertise réside dans l'utilisation de ces outils pour créer des interfaces utilisateur efficaces et dynamiques."
          },
          tools: {
            title: "Outils",
            description:
              "J'ai acquis une expérience précieuse avec Figma et GitHub, améliorant ainsi mes compétences en design et en collaboration pour des projets bien équilibrés."
          }
        },
        projects: {
          title: "Projets",
          seeMore: "Voir plus",
          modal: {
            details: "Détails",
            stack: "Technologies utilisées",
            year: "Année",
            viewCode: "Voir le code",
            visitWebsite: "Visiter le site",
            kasaWebsite: {
              title: "Front-end du site Kasa",
              description: {
                part1: "Front-end du site Kasa.",
                part2:
                  "Développement front-end pour un site de location d'hébergement en utilisant React.",
                part3: "Création de composants React et gestion d'état."
              }
            },
            bookiWebsite: {
              title: "Interface utilisateur réactive pour Booki",
              description: {
                part1:
                  "Le projet de l'agence de voyage Booki vise à développer une interface conviviale permettant aux utilisateurs de rechercher et de réserver facilement des hébergements et des activités dans leur ville préférée.",
                part2:
                  "Projet réalisé dans le cadre de ma formation OpenClassrooms, où j'ai été chargé d'intégrer l'interface du site uniquement avec HTML et CSS."
              }
            },
            sophieBluelPortfolioWebsite: {
              title: "Portfolio pour un designer d'intérieur",
              description: {
                part1:
                  "Ce projet a été réalisé dans le cadre de ma formation OpenClassrooms, impliquant le développement front-end du portfolio d'un designer d'intérieur.",
                part2:
                  "Mes responsabilités comprenaient la création de la page de présentation des œuvres, la mise en œuvre de la page de connexion de l'administrateur et la conception de la fenêtre modale pour ajouter de nouveaux médias."
              }
            }
          }
        },
        contact: {
          title: "Contactez-moi",
          workTogether: "Travaillons ensemble",
          contactText: {
            part1:
              "N'hésitez pas à me contacter via ce formulaire ou par",
            part2: " email"
          },
          socials: "// quelques réseaux sociaux",
          form: {
            name: "Nom",
            email: "E-mail",
            message: "Message",
            send: "Envoyer",
            enterYourMessage: "Entrez votre message",
            requiredField: "Ce champ est obligatoire",
            invalidEmail: "Veuillez saisir une adresse e-mail valide.",
            messageLengthError:
              "Le message doit contenir au moins 10 caractères.",
            errorMessage: "Message d'erreur",
            successMessage: "Message envoyé avec succès"
          }
        }
      }
}

export default translations;