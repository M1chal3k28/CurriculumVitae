import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"

type CarouselSlide = JSX.Element;
type CarouselProps = {
    slides: CarouselSlide[]
}

const Carousel: React.FC<CarouselProps> = ({slides}: CarouselProps) => {
    const [curr, setCurr] = useState(0);

    const prev = () => 
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => 
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className="overflow-hidden relative w-full h-full flex justify-center">
            <div className="flex">{slides[curr]}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={() => prev()} className="p-1 rounded-full shadow bg-primary/80 text-gray-800 hover:bg-primary">
                    <ChevronLeft />
                </button>

                <button onClick={() => next()}  className="p-1 rounded-full shadow bg-primary/80 text-gray-800 hover:bg-primary">
                    <ChevronRight />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0 z-20">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i} 
                            className={`
                            transition-all w-3 h-3 bg-primary rounded-full
                            ${curr === i ? "p-2" : "bg-opacity-50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel;
export { CarouselSlide, Carousel };