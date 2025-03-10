import EducationCard from "./EducationCard";
import { Education } from "./Educations";
import Educations from "./Educations";

const EducationsContainer = () => {
    const Cards = Educations.map((education: Education) => (
        <li key={education.id}>
            <EducationCard education={education}/>
        </li>
    ));

    return (
        <div className="px-4 sm:px-20 flex items-center justyfi-center py-10">
            <div className="flex flex-col items-center m-auto justify-center">
                <h1 className="font-bold md:text-5xl text-2xl text-primary text-center w-[70%] drop-shadow-lg">My <span className="underline">daily/extracurricular</span> activity about programming</h1>
                <ul className="m-auto w-auto grid grid-cols-2 max-[767px]:grid-cols-1 md:gap-10 gap-1 py-6 bg-transparent ">
                    {Cards}
                </ul>
            </div>
        </div>
    );
}

export default EducationsContainer;