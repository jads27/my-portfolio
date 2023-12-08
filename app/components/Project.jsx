export default function Project({onClick, image, title}) {

    return (
        <button 
            className={`relative z-30 w-full flex items-center h-64 p-8 rounded-xl text-7xl text-[#F1EEE9] font-recursive bg-cover bg-center ${image} bg-blend-darken bg-black bg-opacity-30 shadow-md md:p-16`} 
            onClick={onClick}
            >
            <div className="absolute inset-0 flex items-center justify-center rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#FC9A2F] bg-opacity-75">
                <span className="text-white text-2xl">Cliquez pour en savoir plus</span>
            </div>
            <div className=" text-start">
                <span className="text-6xl md:text-7xl">{title}</span>
            </div>
         </button> 
    )
}