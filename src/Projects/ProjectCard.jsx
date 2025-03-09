import { Link } from "react-router-dom";
import React, {useRef} from 'react'
import Carousel from "../Parts/Carousel";

function ProjectCard(props) {
    let i = 0;
    const assets = props.images.map((image) => (
        <div key={i++} className="justify-center flex">
            <img src={image} className="object-scale-down max-h-lg"/>
        </div>
    ));
    assets.push(<div key={i++} className="flex"><video autoPlay muted loop> <source src={props.video} /></video></div>);
    
    const container = useRef(null);
    const toggleAssets = () => {
        container.current.classList.toggle("hidden")
    }

    return (
        <>
            <div onClick={() => toggleAssets()} className="h-full w-full cursor-help" title="See more">
                <div className="w-auto h-full max-w-96 md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
                    <div className="flex items-center justify-center flex-col xl:flex-row">
                        <img src={props.projectLogo} alt="project Image" className="max-h-36" />
                    </div>

                    <div className="px-5 py-2 flex justify-center break-normal">
                        <p>
                            {props.content}
                            <a href={props.code} target="_blank" className="font-bold underline z-100"> Code</a>
                        </p>
                    </div>
                </div>
            </div>

            <div ref={container} className="assetsContainer max-[800px]:h-[50%] bg-last py-3 flex hidden">
                <button onClick={() => toggleAssets()} className="absolute top-0 right-0 md:top-2 md:right-5 cursor-pointer py-2 px-2 z-20"><i className="fa-regular fa-circle-xmark"></i></button>
                <Carousel className="h-auto">
                    {assets}
                </Carousel>
            </div>
        </>
    );
}

export default ProjectCard;