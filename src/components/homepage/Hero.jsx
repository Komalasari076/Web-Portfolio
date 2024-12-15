import { useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

function Hero() {
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCirclePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <>
      <div
        className="relative w-full min-w-[375px] overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="container mx-auto md:px-10 px-8">
          <div className="min-h-screen flex justify-center items-center relative">
            {/* Content */}
            <div className="text-center">
              <div className="my-10 md:w-5/6 w-full m-auto pb-1">
                <h1 className="w-5/6 md:w-full m-auto text-2xl lg:text-4xl text-gray-800 font-bold mb-4">
                  Crafting Websites
                  <HiOutlineDesktopComputer className="inline mx-4" />
                  Creating Impact
                  <BsGraphUpArrow className="inline mx-4 text-xl lg:text-3xl" />
                </h1>

                <p className="text-md lg:text-lg font-medium">
                  I am a
                  <span className="bg-slate-200 px-2 mx-2">
                    Front End Developer
                  </span>
                  focused on creating websites that are not only functional and
                  visually appealing but also make a positive impact. Combining
                  creativity and technology, I help bring ideas to life as
                  memorable digital experiences.
                </p>
              </div>

              <div className="space-x-4 md:space-x-8 flex justify-center items-center">
                <img
                  src="https://simpleicons.org/icons/react.svg"
                  alt="React"
                  className="md:h-10 h-8 md:w-10 w-8"
                />
                <img
                  src="https://simpleicons.org/icons/html5.svg"
                  alt="HTML5"
                  className="md:h-10 h-8 md:w-10 w-8"
                />
                <img
                  src="https://simpleicons.org/icons/css3.svg"
                  alt="CSS3"
                  className="md:h-10 h-8 md:w-10 w-8"
                />
                <img
                  src="https://simpleicons.org/icons/javascript.svg"
                  alt="JavaScript"
                  className="md:h-10 h-8 md:w-10 w-8"
                />
                <img
                  src="https://simpleicons.org/icons/bootstrap.svg"
                  alt="Bootstrap"
                  className="md:h-10 h-8 md:w-10 w-8"
                />
                <img
                  src="https://simpleicons.org/icons/tailwindcss.svg"
                  alt="Tailwind CSS"
                  className="md:h-10 h-8 md:w-10 w-8"
                />
              </div>
            </div>

            {/* White Overlay */}
            <div
              className="absolute inset-0 bg-white flex items-center justify-center pointer-events-none"
              style={{
                maskImage: `radial-gradient(circle 8rem at ${circlePos.x}px ${circlePos.y}px, transparent 30%, white 0%)`,
                WebkitMaskImage: `radial-gradient(circle 8rem at ${circlePos.x}px ${circlePos.y}px, transparent 30%, white 0%)`,
              }}
            >
              {/* Content */}
              <div className="text-center">
                <div className="my-10 md:w-5/6 w-full m-auto">
                  <h1 className="w-5/6 md:w-full m-auto text-2xl lg:text-4xl text-gray-800 font-bold mb-4">
                    Crafting Websites
                    <HiOutlineDesktopComputer className="inline mx-4" />
                    Creating Impact
                    <BsGraphUpArrow className="inline mx-4 text-xl lg:text-3xl" />
                  </h1>

                  <p className="text-md lg:text-lg font-medium">
                    I am a
                    <span className="bg-slate-200 px-2 mx-2">
                      Front End Developer
                    </span>
                    focused on creating websites that are not only functional
                    and visually appealing but also make a positive impact.
                    Combining creativity and technology, I help bring ideas to
                    life as memorable digital experiences.
                  </p>
                </div>

                <div className="space-x-4 md:space-x-8 flex justify-center items-center">
                  <img
                    src="https://simpleicons.org/icons/react.svg"
                    alt="React"
                    className="md:h-10 h-8 md:w-10 w-8"
                  />
                  <img
                    src="https://simpleicons.org/icons/html5.svg"
                    alt="HTML5"
                    className="md:h-10 h-8 md:w-10 w-8"
                  />
                  <img
                    src="https://simpleicons.org/icons/css3.svg"
                    alt="CSS3"
                    className="md:h-10 h-8 md:w-10 w-8"
                  />
                  <img
                    src="https://simpleicons.org/icons/javascript.svg"
                    alt="JavaScript"
                    className="md:h-10 h-8 md:w-10 w-8"
                  />
                  <img
                    src="https://simpleicons.org/icons/bootstrap.svg"
                    alt="Bootstrap"
                    className="md:h-10 h-8 md:w-10 w-8"
                  />
                  <img
                    src="https://simpleicons.org/icons/tailwindcss.svg"
                    alt="Tailwind CSS"
                    className="md:h-10 h-8 md:w-10 w-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
