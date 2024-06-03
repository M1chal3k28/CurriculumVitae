import { Link } from "react-router-dom";
import React, {useRef} from 'react'

function CourseCard(props) {
    let i = 0;
    const images = props.imageSrc.map((image) => <li key={i++} ><img src={image} height={props.h} width={props.w} className="object-scale-down w-full max-w-32"/></li>);
    
    const container = useRef(null);

    const toggleCeftificate = () => {
        container.current.classList.toggle("hidden")
    }

    return (
        <>
            <button onClick={() => toggleCeftificate()} className="h-full w-full" title="See more">
                <div className="w-auto h-full max-w-96 md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
                    <ul className="flex items-center flex justify-center flex-col xl:flex-row">
                        {images}
                    </ul>

                    <div className="px-5 py-2 flex justify-center break-normal">
                        {props.content}
                    </div>
                </div>
            </button>

            <div ref={container} className="assetsContainer bg-last max-[1200px]:h-auto py-3 flex hidden">
                <button onClick={() => toggleCeftificate()} className="absolute top-0 right-0 md:top-2 md:right-5 cursor-pointer py-2 px-2 z-50"><i className="fa-regular fa-circle-xmark"></i></button>
                <div className="relative w-full h-full flex justify-center items-center"> 
                    <img src={props.certificate} alt="Certification Image" className="object-contain h-[90%]"/>
                </div>
            </div>
        </>
    );
}

export default CourseCard;