import React, {useRef} from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const btnRef = useRef(null);
    const menuRef = useRef(null);
    const navRef = useRef(null);

    const showMenu = () => {
        // Toggle the button
        btnRef.current.classList.toggle('tham-active');

        // Toggle the menu visible flag
        menuRef.current.classList.toggle('mobile-menu-visible');

        // Get height of nav
        const navHeight = navRef.current.offsetHeight;

        // Place the menu
        if (menuRef.current.classList.contains('mobile-menu-visible')) {
            // if menu is not visible
            menuRef.current.style.top = `${-200}px`;
        } else {
            // if menu is visible
            menuRef.current.style.top = `${navHeight}px`, 10;
        }
    };

    const currPath = "/Cv_react_tailwindcss/";
    const Skills = currPath + "skills";
    const Education = currPath + "education";
    const Projects = currPath + "projects";

    return (
        <>
        <nav ref={navRef} className="xl:text-2xl bg-primary opacity-70 hover:opacity-100 transition-all duration-300 relative z-20">
            <div className="max-w-5xl mx-auto px-2">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* <!-- logo --> */}
                        <div>
                            <a href="#" className="flex items-center py-4 px-3">
                            <svg className="h-7 w-7 mr-1 text-black-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                            </svg>
                            <span className="font-bold">Mi&copy;hael</span>
                            </a>
                        </div>

                        {/* primary nav */}
                        <div className="hidden md:flex items-center space-x-3">
                            <Link to={Skills} className="py-4 px-1 text-gray-600 hover:text-gray-900">Skills</Link>
                            <Link to={Education} className="py-4 px-1 text-gray-600 hover:text-gray-900">Education</Link>
                            <Link to={Projects} className="py-4 px-1 text-gray-600 hover:text-gray-900">Projects</Link>
                        </div>
                    </div>

                    {/* Secondary nav */}
                    <div className="hidden md:flex items-center">
                        <Link to={currPath} className="py-2 px-3 text-gray-700 font-bold bg-black-300 hover:bg-last rounded transition duration-300">Courses</Link>
                    </div>

                    {/* mobile button visible only when small screen */}
                    <div className="md:hidden flex items-center">
                        <button ref={btnRef} onClick={() => showMenu()} className="mobile-menu-button tham tham-e-squeeze tham-w-6">
                            <div className="tham-box">
                                <div className="tham-inner" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        {/* mobile menu */}
            <div ref={menuRef} className="mobile-menu-visible md:hidden mobile-menu overflow-hidden absolute right-0 z-10 justify-end text-end bg-primary opacity-70 hover:opacity-100  rounded-bl-md transition-all duration-500 ease-in-out top-[-200px]">
            <Link to={Skills}    className="block py-2 px-4 text-lg hover:bg-gray-200 text-center">Skills</Link>
            <Link to={Education} className="block py-2 px-4 text-lg hover:bg-gray-200 text-center">Education</Link>
            <Link to={Projects}  className="block py-2 px-4 text-lg hover:bg-gray-200 text-center">Projects</Link>
            <Link to={currPath}  className="font-bold block py-2 px-4 text-lg hover:bg-gray-200 text-center">About me</Link>
        </div>
        </>
    );
}

export default Navbar;