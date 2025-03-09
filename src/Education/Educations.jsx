// For leetcode
import leetcode from "./assets/LeetcodeLogo.png"
import zsp9 from "./assets/Zsp9Logo.png"

const Educations = [
    {
        id: 1,
        images: [leetcode],
        content: <div>I train <a href="https://leetcode.com" target="_blank" className="underline font-bold">Leetcode</a> every day. Challanges are about DSA(Data Structure and Algorithms). I got 2 badges: 50 day streak, MayLeetCoding challange</div>,
        link: <a href="https://leetcode.com/u/Michal3k28/" target="_blank" className="underline font-bold"> Profile</a>,
    }, {
        id: 2,
        images: [zsp9],
        content: <div>I go to Technical Secondary School no 9 in Łódź on programming profile</div>,
        link: <a href="https://zsp9.pl" target="_blank" className="underline font-bold"> School</a>
    }
];

export default Educations;