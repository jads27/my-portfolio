import FocusLock from "react-focus-lock"
import Image from "next/image"
import { FaXmark } from "react-icons/fa6"

export default function Modal({ isVisible, onClose, imagePreview, alt, title, details, stack, sourceCodeLink, websiteLink }) {
    if ( !isVisible ) return null

    const handleModalClose = () => {
        onClose()
    }

    const handleWrapperClick = (event) => {
        if( event.target.id === "wrapper") onClose()
    }

    return (
        <FocusLock disabled={!isVisible}>
            <div className="fixed flex z-50 inset-0 bg-[#16130E] bg-opacity-5 backdrop-blur-sm" >
                <div className="flex flex-col justify-center w-full" id="wrapper" onClick={handleWrapperClick}>
                    <div className="relative flex flex-col h-full mt-36 text-black bg-[#F5F5F5] rounded-t-3xl">
                        <button className="absolute top-5 right-5 text-xl text-black place-self-end" onClick={handleModalClose}><FaXmark className="text-3xl" /></button>      
                        <div className="flex my-auto mx-auto max-w-6xl space-x-20 px-4 text-[#16130E]">
                            <div className="flex flex-col">
                                <Image
                                    className="rounded-xl"
                                    src={imagePreview}
                                    alt={alt}
                                    width={600}
                                    height={600}
                                    priority
                                />   
                                <div className="flex justify-between mt-8 text-center text-xl font-bold">
                                    <a className="flex justify-center items-center w-64 h-24 text-[#8AC4CA] font-bold rounded border-2 border-[#8AC4CA]" href={sourceCodeLink} target="_blank" rel="noopener noreferrer">View code</a>
                                    <a className="flex justify-center items-center w-64 h-24 bg-[#FC9A2F] text-[#F5F5F5] rounded" href={websiteLink} target="_blank" rel="noopener noreferrer">Visit website</a>
                                </div>
                            </div>
                            <div className="space-y-5">
                                <h1 className="text-4xl font-semibold font-recursive">{title}</h1>
                                <div>
                                    <h2 className="text-2xl mb-1">Details</h2>
                                    <p className="flex flex-col gap-1.5 opacity-80" dangerouslySetInnerHTML={{ __html: details }} />
                                </div>
                                <div>
                                    <h2 className="text-2xl mb-1">Stack</h2>
                                    <div className="flex gap-2.5 text-[#8AC4CA] font-bold" dangerouslySetInnerHTML={{ __html: stack }} /> 
                                </div>
                                <div>
                                    <h2 className="text-2xl mb-1">Year</h2>
                                    <p className="opacity-80">2023.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FocusLock>
    )
}