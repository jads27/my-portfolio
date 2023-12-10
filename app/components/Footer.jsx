import { useLanguage } from '../../config/contexts/language_context';

export default function Footer() {
    const  { language, translations } = useLanguage()
    const currentTranslations = translations[language] 

    return (
        <footer className="px-4 py-16 text-center space-y-5 bg-secondary bg-opacity-20">
            <div className="mx-auto max-w-6xl border-t-2 border-secondary pt-16 leading-10">
                <p>{currentTranslations.footer.creditText} Jimmy Alves Da Silva</p>
                <p>@ 2023 - Jimmy Alves Da Silva</p>
            </div>
        </footer>
    )
}