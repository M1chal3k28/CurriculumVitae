import { Link } from "react-router-dom";
import React, {useRef} from 'react';
import { Education } from './Educations';

type EducationCardProps = {
    education: Education
};

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
    const images = education.images.map(
        (image: string, index: number) => 
        <li key={index} >
            <img src={image} className="object-scale-down w-full max-w-56"/>
        </li>
    );

    return (
        <div className="w-auto h-full max-w-[500px] md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[15px] rounded opacity-100 md:opacity-70 hover:opacity-100 transition duration-300 shadow-lg">
            <ul className="flex items-center justify-center flex-col xl:flex-row">
                {images}
            </ul>

            <div className="px-5 py-2 flex justify-center break-normal text-center align-center items-center">
                <div>
                    {education.content}
                    {education.link}
                </div>
            </div>
        </div>
    );
};

export default EducationCard;