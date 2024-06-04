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
        code: "https://github.com/M1chal3k28/Chat_AJAX.git",
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
        code: "https://github.com/M1chal3k28/snake.git",
    }, { // Tetris
        id: 3,
        logo: tetrisLogo,
        images: [
            { // gameplay screenshot
                src: tetrisGameplay,
                desc: "Gameplay of snake",
            },
        ],
        video: tetrisVid,
        desc: "Tetris game written with tutorial (with my improvements and additions). Written in c++ using Cmake and Raylib as GameEngine",
        code: "https://github.com/M1chal3k28/Tetris.git",
    }, { // Stickman Jump with sfml
        id: 4,
        logo: stickmanLogo,
        images: [
            { // gameplay screenshot
                src: stickmanGameplay,
                desc: "Gameplay of snake",
            },
        ],
        video: stickmanVid,
        desc: "My game written in C++ using SFML as GameEngine. Written in Visual Studio 2022",
        code: "https://github.com/M1chal3k28/StickmanJUMP.git",
    },
];

export default Projects;