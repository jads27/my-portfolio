import { useLanguage } from '../../config/contexts/language_context';

import Image from "next/image"

export default function SkillsSection() {
  const  { language, translations } = useLanguage()
  const currentTranslations = translations[language]
    return (
        <section id="skills" className="bg-secondary bg-opacity-20 py-16">
            <div className='mx-auto max-w-6xl px-4'>
            <span className="self-start text-xl font-roboto-mono font-bold text-primary">02.</span>
                <div className="flex items-center flex-col">
                    <h1 className="mb-11 text-4xl font-semibold font-recursive">{currentTranslations.skills.title}</h1>
                    <h2 className="mb-3 text-2xl">{currentTranslations.skills.technologies.title}</h2>
                    <div className="relative flex w-full mx-auto max-w-xl max-h-32 mb-11 py-5 rounded-2xl border-2 border-solid border-primary">
                        <div className="absolute flex items-center p-7 text-center inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-700 bg-primary">
                            <span className="select-none text-white text-sm font-black">{currentTranslations.skills.technologies.description}</span>
                        </div>
                        <Image
                        src="/typescript.svg"
                        alt="TypeScript Logo"
                        width={32}
                        height={32}
                        layout="responsive"
                        priority
                        />
                        <Image  
                        src="/react.svg"
                        alt="React Logo"
                        width={32}
                        height={32}
                        layout="responsive"
                        priority
                        />
                        <Image  
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={32}
                        height={32}
                        layout="responsive"
                        priority
                        />
                        <Image
                        src="/tailwind.svg"
                        alt="Tailwind CSS Logo"
                        width={32}
                        height={32}
                        layout="responsive"
                        priority
                        />
                    </div>
                    <h2 className="mb-3 text-2xl">{currentTranslations.skills.tools.title}</h2>
                    <div className="relative flex w-full mx-auto max-w-[18rem] max-h-32 py-5 rounded-2xl border-2 border-solid border-primary">
                        <div className="absolute flex items-center p-7 text-center inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-700 bg-primary">
                            <span className="select-none text-white text-sm font-black">{currentTranslations.skills.tools.description}</span>
                        </div>
                        <Image
                        src="/figma.svg"
                        alt="Figma Logo"
                        width={32}
                        height={32}
                        layout="responsive"
                        priority
                        />
                        <Image
                        src="/github.svg"
                        alt="Github Logo"
                        width={32}
                        height={32}
                        layout="responsive"
                        priority
                        />
                </div>
            </div>
        </div>
      </section>
    )
}