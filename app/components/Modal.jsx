import { motion } from "framer-motion"
import FocusLock from "react-focus-lock"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"

export default function Modal({ isVisible, onClose, imagePreview, alt, title, details, stack, redirectButton }) {
    if ( !isVisible ) return null

    const handleModalClose = () => {
        onClose()
    }

    const handleWrapperClick = (event) => {
        if( event.target.id === "wrapper") onClose()
    }

    const modalAnimation = {
        hidden: { opacity: 0, y: "100% "},
        visible: { opacity: 100, y: 0 },
        exit: { opacity: 0, y: "100%" }
    }

    const transition = {
        duration: 0.2,
        ease: "easeInOut"
    }  

    return (
        <FocusLock disabled={!isVisible}>
            <div className="modal fixed flex z-40 inset-0 bg-[#16130E] bg-opacity-5 backdrop-blur-sm">
                <motion.div 
                className="flex flex-col justify-center w-full" id="wrapper" onClick={handleWrapperClick}
                variants={modalAnimation}
                initial="hidden"
                animate="visible"
                transition={transition}
                exit="exit"
                >
                    <div className="relative flex flex-col overflow-y-auto h-full mt-48 bg-[#f6fafc] rounded-t-[50px] border-t-2 border-primary md:overflow-hidden dark:bg-[#16130E]">
                        <button className="fixed m-6 text-xl place-self-end bg-[#f2fcfe] dark:bg-[#16130E] rounded" onClick={handleModalClose}><FaXmark className="text-4xl" /></button>      
                        <div className="flex flex-col-reverse justify-between my-auto mx-auto w-full gap-8 max-w-6xl px-4 my-34 mt-20 text-center md:flex-row md:text-start md:mt-auto dark:text-[#F5F5F5]">
                            <div className="flex flex-col-reverse w-full md:max-w-lg md:flex-col">
                                <Image
                                    className="rounded-xl"
                                    src={imagePreview}
                                    alt={alt}
                                    width={204}
                                    height={164}
                                    layout="responsive"
                                    priority
                                />   
                                <div className="flex justify-between gap-12 mb-8 text-center text-xl font-bold md:mb-0 md:mt-8" dangerouslySetInnerHTML={{ __html: redirectButton }} />
                            </div>
                            <div className="space-y-5">
                                <h1 className="text-4xl font-semibold font-recursive">{title}</h1>
                                <div>
                                    <h2 className="text-2xl mb-1">Details</h2>
                                    <p className="flex flex-col gap-2 opacity-80" dangerouslySetInnerHTML={{ __html: details }} />
                                </div>
                                <div>
                                    <h2 className="text-2xl mb-1">Stack</h2>
                                    <div className="flex justify-center gap-2.5 text-[#8AC4CA] font-bold md:justify-start" dangerouslySetInnerHTML={{ __html: stack }} /> 
                                </div>
                                <div>
                                    <h2 className="text-2xl mb-1">Year</h2>
                                    <p className="opacity-80">2023.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </FocusLock>
    )
}