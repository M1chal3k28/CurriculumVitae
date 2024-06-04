import { Link } from "react-router-dom";
import React, {useRef} from 'react'
import Carousel from "../Carousel";

function ProjectCard(props) {
    let i = 0;
    const assets = props.images.map((image) => (
        <div key={i++} className="justify-center flex">
            <img src={image.src} className="object-scale-down max-h-lg"/>
        </div>
    ));
    assets.push(<div key={i++} className="justify-center flex"><video autoPlay muted loop> <source src={props.video} /></video></div>);
    
    const container = useRef(null);
    const toggleAssets = () => {
        container.current.classList.toggle("hidden")
    }

    return (
        <>
            <button onClick={() => toggleAssets()} className="h-full w-full" title="See more">
                <div className="w-auto h-full max-w-96 md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
                    <div className="flex items-center flex justify-center flex-col xl:flex-row">
                        <img src={props.projectLogo} alt="project Image" className="max-h-20" />
                    </div>

                    <div className="px-5 py-2 flex justify-center break-normal">
                        {props.content}
                    </div>
                </div>
            </button>

            <div ref={container} className="assetsContainer bg-last py-3 flex hidden">
                <button onClick={() => toggleAssets()} className="absolute top-0 right-0 md:top-2 md:right-5 cursor-pointer py-2 px-2 z-50"><i className="fa-regular fa-circle-xmark"></i></button>
                <Carousel>
                    {assets}
                </Carousel>
            </div>
        </>
    );
}

export default ProjectCard;