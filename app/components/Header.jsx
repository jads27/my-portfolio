import DropdownMenu from "./DropdownMenu"
import SmoothScrollLink from './SmoothScrollLink';
import { useState } from "react"
import { FaBars, FaXmark } from 'react-icons/fa6'

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    const handleClose = () => {
        setIsActive(false)
      };

    return (
        <header className="fixed z-40 top-0 right-0 left-0 bg-[#F5F5F5] border-b-2 border-solid border-[#8AC4CA]">
            <nav className="flex justify-around inset-0 mx-auto max-w-6xl py-[9px] px-4 md:py-3">
                    <ul className="flex justify-center w-full md:justify-between">
                        <li className="rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer hidden md:block"><SmoothScrollLink href="home"><span className="font-roboto-mono font-bold text-[#2854C5]">01.</span> Home</SmoothScrollLink></li>
                        <li className="rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer hidden md:block"><SmoothScrollLink href="skills"><span className="font-roboto-mono font-bold text-[#2854C5]">02.</span> Skills</SmoothScrollLink></li>
                        <li className="rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer hidden md:block"><SmoothScrollLink href="projects"><span className="font-roboto-mono font-bold text-[#2854C5]">03.</span> Projects</SmoothScrollLink></li>
                        <li className="rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out cursor-pointer hidden md:block"><SmoothScrollLink href="contact"><span className="font-roboto-mono font-bold text-[#2854C5]">04.</span> Contact</SmoothScrollLink></li>
                        <li className="flex items-center">
                            <button className="block rounded-lg hover:bg-[#8AC4CA] hover:bg-opacity-50 transition duration-300 ease-in-out" onClick={handleClick}>{isActive ? <FaXmark className="text-5xl md:text-3xl" /> : <FaBars className="text-5xl md:text-3xl" />}
                            </button>               
                        </li>
                    </ul>
            </nav>
                <DropdownMenu isOpen={isActive} onClose={handleClose} />
        </header>
    )
}