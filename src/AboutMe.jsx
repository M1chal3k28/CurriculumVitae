import profImg from "./assets/profiImg.jpg"

function AboutMe() {
    return (
        <section className="w-full h-full py-10 px-10">
            <div className="flex md:flex-row flex-col bg-blue-200 py-2 px-2 rounded">
                {/* Image */}
                <div className="md:py-4 md:px-5 flex items-center w-full justify-center m-auto">
                    <img src={profImg} alt="Profile image" className="h-36 md:h-56 w-auto rounded"/>
                </div>

                {/* Text content */}
                <div className="flex flex-col py-2 px-2 lg:text-2xl">
                    <div className="font-bold "><h1>About Me</h1></div>
                    <div></div>
                    {/* content */}
                    <div className="word-wrap md:py-5 px-4 md:m-3">
                        Hi, I am Michael for small town called Justynów near Łódź. I study in Zespół Szkół Politechnicznych nr 9 w Łodzi im. KEN on a programming profile
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;