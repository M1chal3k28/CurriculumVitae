import CourseCard from "./CourseCard";
import Courses, { Course } from "./Courses";

function CourseContainer() {
    const Cards = Courses.map((course: Course) => (
        <li key={course.id}>
            <CourseCard course={course}/>
        </li>
    ));

    return (
        <div className="px-4 sm:px-20 flex items-center justyfi-center py-10">
            <div className="flex flex-col items-center m-auto justify-center">
                <h1 className="font-bold md:text-5xl text-2xl text-primary drop-shadow-lg"><span className="underline">Finished</span> Courses</h1>
                <ul className="m-auto w-auto grid xl:grid-cols-3 grid-cols-2 max-[767px]:grid-cols-1 md:gap-10 gap-1 py-6 bg-transparent ">
                    {Cards}
                </ul>
            </div>
        </div>
    );
}

export default CourseContainer;