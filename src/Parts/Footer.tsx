import { Link } from "react-router-dom";
import { basePath, projectsPath, educationPath, skillsPath } from "../Config";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white absolute bottom-0 w-full">
            <div className="md:px-12 px-10 bg-[#ffffff19] py-2 flex items-center flex-col space-y-4">
                <div className="w-full md:px-20">
                    <div className="flex flex-row justify-around">
                        <div className="flex justify-center mx-2">
                            <div className="items-center md:flex-row md:space-x-1 flex flex-col">
                                <Link to={skillsPath}    className="py-1 px-1 text-gray-500 hover:text-gray-300 text-xs xl:text-xl">Skills</Link>
                                <Link to={educationPath} className="py-1 px-1 text-gray-500 hover:text-gray-300 text-xs xl:text-xl">Education</Link>
                                <Link to={projectsPath}  className="py-1 px-1 text-gray-500 hover:text-gray-300 text-xs xl:text-xl">Projects</Link>
                                <Link to={basePath}  className="py-1 text-gray-500 hover:text-gray-300 text-xs xl:text-xl">Courses</Link>
                            </div>
                        </div>

                        <div className="items-center flex md:flex-row md:space-x-3 md:space-y-0 space-x-0 flex-col space-y-1 justify-center md:text-2xl">
                            <div className="flex flex-row space-x-3">
                                <a href="https://github.com/M1chal3k28" target="_blank"><i className="fa-brands fa-github"></i></a>

                                {/* leetcode icon */}
                                <a href="https://leetcode.com/u/Michal3k28/" target="_blank" className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={15.5} height={17.33} className="rounded-full" fill="rgba(255, 255, 255, 1)">
                                        <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
                                    </svg>
                                </a>
                            </div>

                            <div className="flex flex-row space-x-3">
                                <a href="mailto:balcerakm0@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                                <a href="https://stackoverflow.com/users/21859898/micha%c5%82-balcerak" target="_blank"><i className="fa-brands fa-stack-overflow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={basePath} className="flex text-center justify-content-center">
                    <span className="text-gray-400 text-sm xl:text-1xl">Michał Balcerak &copy; {new Date().getFullYear()}</span>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;