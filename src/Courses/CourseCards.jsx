import jsOpenEDG from "./assets/openEDGJS.png"
import ciscoLogo from "./assets/Cisco.png"
import ciscoNetacadLogo from "./assets/Cisco_academy_logo.svg"
import itFittnes from "./assets/ItFittnes.png"
import cppInstitute from "./assets/cppInstitute.png"

const Courses = [
    { // Cisco Js OPENEDG
        imageSrc: [ciscoLogo, jsOpenEDG],
        content: "Beginner course about JavaScript from Open EDGJS and Cisco",
        finished: [4, 2024]
    }, { // Cisco Cpp essentials
        imageSrc: [ciscoLogo, cppInstitute],
        content: "Beginner course about Cpp from Cpp Institute and Cisco",
        finished: [5, 2024]
    }, { // IoE cisco
        imageSrc: [ciscoNetacadLogo],
        content: "Internet of Everything basics from Cisco Netetworking Academy",
        finished: [2, 2023]
    }, { // ItFittnes
        imageSrc: [itFittnes],
        content: "ItFittnes test ",
        finished: [10, 2024]
    }
];

export default Courses;
