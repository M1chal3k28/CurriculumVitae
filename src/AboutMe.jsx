import profImg from "./assets/profiImg.jpg"

function AboutMe() {
    return (
        <section className="w-full h-full py-10 px-10 flex justify-center">
            <div className="flex md:w-fit md:flex-row flex-col opacity-100 bg-last py-2 px-2 rounded hover:opacity-100 transition duration-300 md:opacity-70">
                {/* Image */}
                <div className="md:py-4 md:px-5 md:w-46 flex items-center justify-center">
                    <img src={profImg} alt="Profile image" className="h-36 md:h-56 w-auto rounded"/>
                </div>

                {/* Text content */}
                <div className="flex flex-col md:w-96 py-2 px-2 lg:text-xl">
                    <div className="font-bold "><h1>About Me</h1></div>
                    <div></div>
                    {/* content */}
                    <div className="word-wrap px-4">
                        Hi, I am Michael from small town called Justynów near Łódź. I study in technical secondary school no 9 in Łódź named after KEN) on a programming profile.
                        In my free time a program a lot, watch films, play games and train calistenics. 
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;