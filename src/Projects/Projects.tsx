// For chat in Ajax
import chatVideo from "./assets/chatAJAX/chatAJAX_video.mp4"
import chatLogin from "./assets/chatAJAX/login.png"
import chatMenu from "./assets/chatAJAX/menu.png"
import chatWindow from "./assets/chatAJAX/chatWindow.png"
import chatLogo from "./assets/chatAJAX/chatLogo.png"

// For snake in python
import snakeLogo from "./assets/snakePython/snakeLogo.png"
import snakeGameplay from "./assets/snakePython/gameplay.png"
import snakeGameplayVid from "./assets/snakePython/snake.mp4"

// tetris in cpp and raylib
import tetrisLogo from "./assets/tetrisCmakeRaylib/tetrisLogo.png"
import tetrisGameplay from "./assets/tetrisCmakeRaylib/gameplay.png"
import tetrisVid from "./assets/tetrisCmakeRaylib/tetrisVid.mp4"

// Game in sfml and cpp
import stickmanLogo from "./assets/stickmanJump/stickmanLogo.png"
import stickmanGameplay from "./assets/stickmanJump/gameplay.png"
import stickmanVid from "./assets/stickmanJump/stickmanJumpVid.mp4"

// PHP web in group
import creatorEditing from "./assets/PHPwebProject/ArticleCreatorEditing.png"
import articlePage from "./assets/PHPwebProject/articlePage.png"
import articlePage2 from "./assets/PHPwebProject/articlePage2.png"
import creatorBlank from "./assets/PHPwebProject/CreatorBlank.png"
import loginPHP from "./assets/PHPwebProject/login.png"
import profilePage from "./assets/PHPwebProject/profilePage.png"
import mainPage from "./assets/PHPwebProject/mainPage.png"
import registerPage from "./assets/PHPwebProject/register.png"
import motonewsVid from "./assets/PHPwebProject/motonewsVid.mp4"
import motonewsLogo from "./assets/PHPwebProject/logo.png"

// For shop sim in cpp
import videoSimCpp from "./assets/shopSimCpp/ShopSimulator.mp4"
import logoSimCpp from "./assets/shopSimCpp/logoSimCpp.png"
import simCppPng from "./assets/shopSimCpp/screenShot.png"

interface Project {
    id: number,
    logo: string,
    images: string[],
    video: string,
    desc: string,
    code: string
};

const Projects: Project[] = [
    { // Chat in AJAX, php, mysql, js, css
        id: 1,
        logo: chatLogo,
        images: [chatLogin, chatMenu, chatWindow],
        video: chatVideo,
        desc: "Real-time chat made in AJAX and PHP with tutorial",
        code: "https://github.com/M1chal3k28/Chat_AJAX.git",
    }, { // Snake in python
        id: 2,
        logo: snakeLogo,
        images: [snakeGameplay],
        video: snakeGameplayVid,
        desc: "Snake game written in Python (pygame)",
        code: "https://github.com/M1chal3k28/snake.git",
    }, { // Tetris
        id: 3,
        logo: tetrisLogo,
        images: [tetrisGameplay],
        video: tetrisVid,
        desc: "Tetris game written with tutorial (with my improvements and additions). Written in C++ using Cmake and Raylib as GameEngine",
        code: "https://github.com/M1chal3k28/Tetris.git",
    }, { // Stickman Jump with sfml
        id: 4,
        logo: stickmanLogo,
        images: [stickmanGameplay],
        video: stickmanVid,
        desc: "My game written in C++ using SFML as GameEngine. Written in Visual Studio 2022",
        code: "https://github.com/M1chal3k28/StickmanJUMP.git",
    }, { // Website in PHP created in group for school project
        id: 5,
        logo: motonewsLogo,
        images: [creatorEditing, articlePage, articlePage2, creatorBlank, loginPHP, profilePage, mainPage, registerPage],
        video: motonewsVid,
        desc: "Website poject in PHP made with my friends. On this website you can read articles and write comments :)",
        code: "https://github.com/M1chal3k28/PHP_website_Project.git",
    }, { // Shop simulator
        id: 6,
        logo: logoSimCpp,
        images: [simCppPng],
        video: videoSimCpp,
        desc: "Simulator of shop where you can be manager adding and changing products, or customer which buys items from shop. Written in pure C++",
        code: "https://github.com/M1chal3k28/Shop.git",
    },
];

export default Projects;
export { Project, Projects };