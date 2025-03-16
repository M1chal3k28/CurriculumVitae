import { Link } from "react-router-dom";
import React, {useRef} from 'react'
import { Carousel, CarouselSlide } from "../Parts/Carousel";
import { Project } from "./Projects";

type ProjectCardProps = {
    project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }: ProjectCardProps) => {
    // Create slides from images
    const assets: CarouselSlide[] = project.images.map(( image: string, index: number ) => (
        <div key={index} className="justify-center flex">
            <img src={image} className="object-scale-down max-h-lg"/>
        </div>
    ));

    // Add video to slides
    assets.push(<div className="flex"><video autoPlay muted loop> <source src={project.video} /></video></div>);
    
    const container = useRef<HTMLDivElement>(null);
    const toggleAssets = () => {
        // Check if the container exists
        if (container && container.current) {
            container.current.classList.toggle("hidden")
            container.current.classList.toggle("flex")
        }
    }

    return (
        <>
            <div onClick={() => toggleAssets()} className="h-full w-full cursor-help" title="See more">
                <div className="w-auto h-full max-w-96 md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
                    <div className="flex items-center justify-center flex-col xl:flex-row">
                        <img src={project.logo} alt="project Image" className="max-h-36" />
                    </div>

                    <div className="px-5 py-2 flex justify-center break-normal">
                        <p>
                            {project.desc}
                            <a href={project.code} target="_blank" className="font-bold underline z-100"> Code</a>
                        </p>
                    </div>
                </div>
            </div>

            <div ref={container} className="assetsContainer max-[800px]:h-[50%] bg-last py-3 hidden">
                <button onClick={() => toggleAssets()} className="absolute top-0 right-0 md:top-2 md:right-5 cursor-pointer py-2 px-2 z-20"><i className="fa-regular fa-circle-xmark"></i></button>
                <Carousel slides={assets}/>
            </div>
        </>
    );
}

export default ProjectCard;