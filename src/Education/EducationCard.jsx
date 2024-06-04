import { Link } from "react-router-dom";
import React, {useRef} from 'react'

function EducationCard(props) {
    let i = 0;
    const images = props.imageSrc.map((image) => <li key={i++} ><img src={image} className="object-scale-down w-full max-w-56"/></li>);

    return (
        <>
            <button onClick={() => toggleCeftificate()} className="h-full w-full" title="See more">
                <div className="w-auto h-full max-w-[500px] md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
                    <ul className="flex items-center flex justify-center flex-col xl:flex-row">
                        {images}
                    </ul>

                    <div className="px-5 py-2 flex justify-center break-normal text-center align-center items-center">
                        <p>
                            {props.content}
                            {props.link}
                        </p>
                    </div>
                </div>
            </button>
        </>
    );
}

export default EducationCard;