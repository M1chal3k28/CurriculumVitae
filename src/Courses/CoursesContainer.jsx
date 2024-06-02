import CourseCard from "./CourseCard.jsx";
import Courses from "./CourseCards.jsx";

function CourseContainer() {
    const Cards = Courses.map((Course) => <CourseCard imageSrc={Course.imageSrc} content={Course.content}/>)

    return (
        <div className="px-4 sm:px-20 flex items-center justyfi-center py-10">
            <div className="flex flex-col items-center m-auto">
                <h1 className="font-bold text-2xl">Finished Courses</h1>
                <section className="m-auto w-auto grid xl:grid-cols-3 grid-cols-2 md:gap-10 gap-1 py-6 bg-transparent">
                    {Cards}
                </section>
            </div>
        </div>
    );
}

export default CourseContainer;