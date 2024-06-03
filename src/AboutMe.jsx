import profImg from "./assets/profiImg.jpg"

function AboutMe() {
    return (
        <>
            <section className="w-full h-full py-10 px-10 flex justify-center">
                <div className="flex md:w-fit md:flex-row flex-col opacity-100 bg-last py-2 px-2 md:rounded-[30px] rounded-[10px] hover:opacity-100 transition duration-300 md:opacity-70 shadow-lg">
                    {/* Image */}
                    <div className="md:py-4 md:px-5 md:w-46 flex items-center justify-center">
                        <img src={profImg} alt="Profile image" className="max-[320px]:h-20 h-48 md:h-56 w-auto md:rounded-[34px] rounded-[10px]"/>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col md:w-96 py-2 px-2 md:text-xl sm:text-sm max-[320px]:text-[5px]">
                        <div className="font-bold "><h1>About Me</h1></div>
                        <div></div>
                        {/* content */}
                        <div className="word-wrap px-4">
                            Hi, I am Michael from small town called Justynów near Łódź. I study in Technical Secondary school no 9 in Łódź (named after KEN) on a programming profile.
                            In my free time I program a lot, watch films, play games and train calisthenics. 
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;