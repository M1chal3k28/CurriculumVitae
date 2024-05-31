import React, {useRef} from 'react'

function Navbar() {
    const btnRef = useRef(null);
    const menuRef = useRef(null);

    const showMenu = () => {
        menuRef.current.classList.toggle('hidden');
        btnRef.current.classList.toggle('tham-active');
    };

    return (
        <nav class="xl:text-2xl bg-blue-300 opacity-70 hover:opacity-100 transition-all duration-300">
            <div class="max-w-5xl mx-auto px-5">
                <div class="flex justify-between">
                    <div class="flex space-x-4">
                        {/* <!-- logo --> */}
                        <div>
                            <a href="#" class="flex items-center py-4 px-3">
                            <svg class="h-7 w-7 mr-1 text-black-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
                            </svg>
                            <span class="font-bold">Mi&copy;hael</span>
                            </a>
                        </div>

                        {/* primary nav */}
                        <div class="hidden md:flex items-center space-x-3">
                            <a href="" class="py-4 px-1 text-gray-700 hover:text-gray-900">Skills</a>
                            <a href="" class="py-4 px-1 text-gray-700 hover:text-gray-900">Education</a>
                            <a href="" class="py-4 px-1 text-gray-700 hover:text-gray-900">Projects</a>
                        </div>
                    </div>

                    {/* Secondary nav */}
                    <div class="hidden md:flex items-center">
                        <a href="" class="py-2 px-3 text-gray-700 font-bold bg-black-300 rounded hover:bg-blue-200 rounded transition duration-300">About Me</a>
                    </div>

                    {/* mobile button visible only when small screen */}
                    <div class="md:hidden flex items-center">
                        <button ref={btnRef} onClick={() => showMenu()} class="mobile-menu-button tham tham-e-squeeze tham-w-6">
                            <div class="tham-box">
                                <div class="tham-inner" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* mobile menu */}
            <div ref={menuRef} class="md:hidden mobile-menu hidden overflow-hidden">
                <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200">Skills</a>
                <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200">Education</a>
                <a href="" class="block py-2 px-4 text-sm hover:bg-gray-200">Projects</a>
                <a href="" class="font-bold block py-2 px-4 text-sm hover:bg-gray-200">About me</a>
            </div>
        </nav>
    );
}

export default Navbar;