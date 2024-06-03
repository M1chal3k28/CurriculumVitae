import { Link } from "react-router-dom";
import React, {useRef} from 'react'
import { Player } from 'video-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectCard(props) {
    let i = 0;
    const images = props.images.map((image) => (
        <div key={i++} className="w-auto">
            <img src={image.src} className="object-scale-down w-[90%] h-[90%] "/>
        </div>
    ));
    i = 0;
    const videos = props.videos.map((video) => (
        <div key={i++} >
            <Player className="w-[90%] h-[90%] object-scale-down">
                <source src={video.src} />
            </Player>
        </div>
    ));
    
    const container = useRef(null);
    const toggleAssets = () => {
        container.current.classList.toggle("hidden")
    }

    // For slider style
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
    };

    return (
        <>
            <button onClick={() => toggleAssets()} className="h-full w-full" title="See more">
                <div className="w-auto h-full max-w-96 md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
                    <div className="flex items-center flex justify-center flex-col xl:flex-row">
                        <img src={props.projectLogo} alt="project Image" />
                    </div>

                    <div className="px-5 py-2 flex justify-center break-normal">
                        {props.content}
                    </div>
                </div>
            </button>

            <div ref={container} className="assetsContainer bg-last max-[1200px]:h-auto py-3 flex hidden">
                <button onClick={() => toggleAssets()} className="absolute top-0 right-0 md:top-2 md:right-5 cursor-pointer py-2 px-2 z-50"><i className="fa-regular fa-circle-xmark"></i></button>
                <div> 
                    <Carousel 
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button className="bg-primary" type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                                        -
                                    </button>
                                )
                            }
                            
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button className="bg-primary" type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                                        +
                                    </button>
                                )
                            }

                            renderIndicator={null}

                            className="relative items-center justify-center text-black" dynamicHeight="true" selectedItem={images.length + videos.length - 1} useKeyboardArrows="true" showThumbs={false}
                        >
                        {images}
                        {videos}
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;