import Image from "next/image"

export default function SkillsSection() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-4">
        <span className="self-start text-xl font-roboto-mono font-bold text-[#2854C5]">02.</span>
        <div className="flex items-center flex-col">
          <h1 className="mb-11 text-4xl font-semibold font-recursive">Skills</h1>
          <h2 className="mb-3 text-2xl">Technologies</h2>
          <div className="flex w-full mx-auto max-w-xl max-h-32 mb-11 py-5 border-4 rounded-2xl border-solid border-[#8AC4CA]">
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
          <h2 className="mb-3 text-2xl">Outils</h2>
          <div className="flex w-full mx-auto max-w-[16rem] max-h-32 mb-11 py-5 border-4 rounded-2xl border-solid border-[#8AC4CA]">
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
      </section>
    )
}