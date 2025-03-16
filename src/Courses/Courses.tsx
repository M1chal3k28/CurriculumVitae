import jsOpenEDG from "./assets/openEDGJS.png"
import ciscoLogo from "./assets/Cisco.png"
import ciscoNetacadLogo from "./assets/Cisco_academy_logo.svg"
import itFitness from "./assets/ItFitness.png"
import cppInstitute from "./assets/cppInstitute.png"
import giganciProg from "./assets/giganciP.png"

// Certificates
import GigaThon from "./assets/gigathon.png"
import Cybersecurity from "./assets/cyberSecurity.png"
import CppCourse from "./assets/cppCourse.png"
import ItFitness from "./assets/itFitnessCert.png"
import JsCourse from "./assets/JsCourse.png"
import IoeCourse from "./assets/IoE.png"

interface Course {
    id: number,
    imageSrc: string[],
    content: string,
    finished: number[],
    certificate: string
};

const Courses: Course[] = [
    { // Cisco Js OPENEDG
        id: 0,
        imageSrc: [ciscoLogo, jsOpenEDG],
        content: "Beginner course about JavaScript from Open EDGJS and Cisco",
        finished: [4, 2024],
        certificate: JsCourse
    }, { // Cisco Cpp essentials
        id: 1,
        imageSrc: [ciscoLogo, cppInstitute],
        content: "Beginner course about Cpp from Cpp Institute and Cisco",
        finished: [5, 2024],
        certificate: CppCourse
    }, { // IoE cisco
        id: 2,
        imageSrc: [ciscoNetacadLogo],
        content: "Internet of Everything basics from Cisco Netetworking Academy",
        finished: [2, 2023],
        certificate: IoeCourse
    }, { // ItFittnes
        id: 3,
        imageSrc: [itFitness],
        content: "Participated in ItFitness online test ",
        finished: [10, 2024],
        certificate: ItFitness
    }, { // ItFittnes
        id: 4,
        imageSrc: [giganciProg],
        content: "Qualified to the second stage of the Gigathon competition",
        finished: [10, 2024],
        certificate: GigaThon
    }, { // Cybersecurity
        id: 5,
        imageSrc: [ciscoNetacadLogo],
        content: "Achieved student level credential for completing the Introduction to Cybersecurity course from Cisco",
        finished: [10, 2024],
        certificate: Cybersecurity
    }
];

export default Courses;
export { Course, Courses };
