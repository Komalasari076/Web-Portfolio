import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full py-6 my-6">
      <div
        className="container mx-auto md:px-10 px-6 tracking-normal flex justify-center items-center"
        style={{ height: "calc(100vh - 170px)" }}
      >
        <div className="md:w-2/3 w-full text-center">
          <h1 className="text-2xl text-gray-800 font-bold mb-4">
            Crafting Websites, Creating Impact
          </h1>

          <p className="mb-8 font-medium">
            I am a web developer focused on creating websites that are not only
            functional and visually appealing but also make a positive impact.
            Combining creativity and technology, I help bring ideas to life as
            memorable digital experiences.
          </p>

          <div className="space-x-4 md:space-x-8 flex justify-center items-center">
            <button className="inline-block font-semibold border-2 border-red bg-red py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red">
              <Link to="/contact">Hire Me</Link>
            </button>
            <button className="inline-block font-semibold border-2 border-red bg-red py-2 px-6 rounded-full hover:bg-softPink hover:border-softPink hover:text-red">
              <Link to="/portfolio">Portfolio</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
