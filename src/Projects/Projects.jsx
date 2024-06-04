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

const Projects = [
    { // Chat in AJAX, php, mysql, js, css
        id: 1,
        logo: chatLogo,
        images: [
            { // chatLogin
                src: chatLogin,
                desc: "Login window",
            }, { // chatMenu
                src: chatMenu,
                desc: "Menu of chat app",
            }, { // chatWindow
                src: chatWindow,
                desc: "Chat window for chating",
            },
        ],
        video: chatVideo,
        desc: "Real-time chat made in AJAX and php with tutorial",
    }, { // Snake in python
        id: 2,
        logo: snakeLogo,
        images: [
            { // gameplay screenshot
                src: snakeGameplay,
                desc: "Gameplay of snake",
            },
        ],
        video: snakeGameplayVid,
        desc: "Snake game written in python (pygame)",
    }, { // Tetris
        id: 2,
        logo: tetrisLogo,
        images: [
            { // gameplay screenshot
                src: tetrisGameplay,
                desc: "Gameplay of snake",
            },
        ],
        video: tetrisVid,
        desc: "Tetris game written with tutorial (with my improvements and additions). Written in c++ using Cmake and Raylib as GameEngine",
    },
];

export default Projects;