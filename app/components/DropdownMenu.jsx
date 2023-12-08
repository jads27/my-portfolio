import  Link  from "next/link"
import SmoothScrollLink from './SmoothScrollLink';
import { FaLanguage } from "react-icons/fa6"
import { BsSunFill } from "react-icons/bs"

export default function DropdownMenu({ isOpen, onClose }) {
    return (
            <div className={`${!isOpen ? "hidden" : "flex" } absolute w-full mt-[2px] border-b-2 border-[#8AC4CA] bg-[#F5F5F5]`}>
                <nav className="flex inset-0 mx-auto max-w-6xl py-3 px-4 md:w-full">
                    <ul className="grid grid-rows-2 grid-cols-2 justify-between w-full md:flex">
                        <li className="order-1 md:order-none w-fullrounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer md:hidden"><SmoothScrollLink href="home"><span className="font-roboto-mono font-bold text-[#2854C5]">01.</span> Home</SmoothScrollLink></li>
                        <li className="order-3 md:order-none rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer md:hidden"><SmoothScrollLink href="skills"><span className="font-roboto-mono font-bold text-[#2854C5]">02.</span> Skills</SmoothScrollLink></li>
                        <li className="order-5 md:order-none rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer md:hidden"><SmoothScrollLink href="projects"><span className="font-roboto-mono font-bold text-[#2854C5]">03.</span> Projects</SmoothScrollLink></li>
                        <li className="order-7 md:order-none rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer md:hidden"><SmoothScrollLink href="contact"><span className="font-roboto-mono font-bold text-[#2854C5]">04.</span> Contact</SmoothScrollLink></li>
                        <li className="order-2 md:order-none rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out"><Link className="py-2 px-5 block" href="/about"><span className="font-roboto-mono font-bold text-[#2854C5]">00.</span> About</Link></li>
                        <li className="order-4 md:order-none rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out"><button className=" flex items-center py-2 px-5"><FaLanguage className="text-xl text-[#2854C5]" /><span className="font-roboto-mono font-bold text-[#2854C5]">.</span> English</button></li>
                        <li className="order-6 md:order-none rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out whitespace-nowrap"><button className="flex items-center py-2 px-5"><BsSunFill className="text-xl text-[#2854C5]" /><span className="font-roboto-mono font-bold text-[#2854C5]">.</span> Light mode</button></li>
                        <li className="hidden md:block"></li>
                        <li className="hidden md:block"></li>
                        <li className="hidden md:block"></li>
                    </ul>
                </nav>
            </div>
    )
}