import { Link } from "react-router-dom";

function CourseCard(props) {
    const images = props.imageSrc.map((image) => <img src={image} height={props.h} width={props.w} className="object-scale-down w-full max-w-32"/>);

    return (
        <Link title="See more">
            <div className="w-auto max-w-96 md:py-5 md:px-5 py-1 px-1 bg-last flex flex-col sm:text-xl text-[10px] rounded">
                <div className="flex items-center flex justify-center flex-col xl:flex-row">
                    {images}
                </div>

                <div className="md:px-5 md:py-2 flex justify-center">
                    {props.content}
                </div>
            </div>
        </Link>
    );
}

export default CourseCard;