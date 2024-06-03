// For chat in Ajax
import chatVideo from "./assets/chatAJAX/chatAJAX_video.mp4"
import chatLogin from "./assets/chatAJAX/login.png"
import chatMenu from "./assets/chatAJAX/menu.png"
import chatWindow from "./assets/chatAJAX/chatWindow.png"
import chatLogo from "./assets/chatAJAX/chatLogo.png"

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
        videos: [
            { // chat video
                src: chatVideo,
                desc: "Showcase of chat in action"
            },
        ],
        desc: "Real-time chat made in AJAX and php",
    }
];

export default Projects;