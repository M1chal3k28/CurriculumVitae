// For leetcode
import leetcode from "./assets/LeetcodeLogo.png"
import zsp9 from "./assets/Zsp9Logo.png"

const linkStyles = {
    textDecoration: "underline",
    fontWeight: "600"
};

const Educations = [
    {
        id: 1,
        images: [leetcode],
        content: "Every day I solve one or more questions from leetcode.com. They are about DSA(Data Structure and Algorithms). Currently I spent 2 months on solving those questions and I feel much better in this topic. I got 2 badges: 50 day streak, MayLeetCoding challange",
        link: <a href="https://leetcode.com/u/Michal3k28/" target="_blank" style={linkStyles}> Profile</a>,
    }, {
        id: 2,
        images: [zsp9],
        content: "I go to Technical Secondary School no 9 in Łódź on programming profile",
        link: <a href="https://zsp9.pl" target="_blank" style={linkStyles}> School</a>
    }
];

export default Educations;