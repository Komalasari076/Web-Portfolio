import Wave from "../assets/Wave.svg";
import WeCare from "../assets/WeCare.png";
import Portify from "../assets/Portify.png";
import LandingPage from "../assets/LandingPage.png";

function Portfolio() {
  return (
    <>
      <div className="relative w-full py-6 bg-slate-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Wave})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto md:px-10 px-6 tracking-normal lg:pt-20 md:pt-40 pt-64">
          <h1 className="text-lg font-medium bg-slate-50 py-2 px-4 my-10 rounded-lg w-fit shadow-md">
            Full Stack Developer
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={WeCare}
                alt="WeCare Project"
                className="w-full h-[200px] object-cover "
              />
              <div className="px-6 py-4 bg-slate-50">
                <h5 className="text-xl font-bold mb-2">
                  Wecare (Team Project)
                </h5>
                <div className="flex justify-start gap-4 pr-2 text-gray-700">
                  <p className=" text-base bg-slate-50 px-4 py-1 rounded-md shadow-md">
                    React
                  </p>
                  <p className=" text-base bg-gray-100 px-4 py-1 rounded-md shadow-md">
                    Tailwind
                  </p>
                  <p className=" text-base bg-gray-100 px-4 py-1 rounded-md shadow-md">
                    Express.js
                  </p>
                  <p className=" text-base bg-gray-100 px-4 py-1 rounded-md shadow-md">
                    MongoDB
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={Portify}
                alt="Portify Project"
                className="bg-gray-100 w-full h-[200px] object-cover"
              />
              <div className="px-6 py-4 bg-slate-50">
                <h5 className="text-xl font-bold mb-2">
                  Portify (Personal Project)
                </h5>
                <div className="flex justify-start gap-4 pr-2 text-gray-700">
                  <p className="text-base bg-slate-50 px-4 py-1 rounded-md shadow-md">
                    React
                  </p>
                  <p className="text-base bg-slate-50 px-4 py-1 rounded-md shadow-md">
                    Tailwind
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={LandingPage}
                alt="Landing Page"
                className="bg-gray-100 w-full h-[200px] object-cover"
              />
              <div class="px-6 py-4 bg-slate-50">
                <h5 class="text-xl font-bold mb-2">
                  Landing Page (Personal Project)
                </h5>
                <div className="flex justify-start gap-4 pr-2 text-gray-700">
                  <p class="text-base bg-slate-50 px-4 py-1 rounded-md shadow-md">
                    HTML
                  </p>
                  <p class="text-base bg-slate-50 px-4 py-1 rounded-md shadow-md">
                    CSS
                  </p>
                  <p class="text-base bg-slate-50 px-4 py-1 rounded-md shadow-md">
                    JavaScript
                  </p>
                </div>
              </div>
              <div class="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100">
                <a href="#" class="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div>

            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="" alt="" className="bg-gray-100 w-full h-[200px]" />
              <div class="px-6 py-4">
                <h5 class="text-xl font-bold mb-2">Card title</h5>
                <div className="flex gap-4">
                  <p class="text-gray-700 text-base bg-gray-100 ">React</p>
                  <p class="text-gray-700 text-base bg-gray-100 ">Tailwind</p>
                </div>
              </div>
              <div class="px-6 py-4 flex justify-between">
                <a href="#" class="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div> */}

            {/* <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="" alt="" className="bg-gray-100 w-full h-[200px]" />
              <div class="px-6 py-4">
                <h5 class="text-xl font-bold mb-2">Card title</h5>
                <div className="flex gap-4">
                  <p class="text-gray-700 text-base bg-gray-100 ">React</p>
                  <p class="text-gray-700 text-base bg-gray-100 ">Tailwind</p>
                </div>
              </div>
              <div class="px-6 py-4 flex justify-between">
                <a href="#" class="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="" alt="" className="bg-gray-100 w-full h-[200px]" />
              <div class="px-6 py-4">
                <h5 class="text-xl font-bold mb-2">Card title</h5>
                <div className="flex gap-4">
                  <p class="text-gray-700 text-base bg-gray-100 ">React</p>
                  <p class="text-gray-700 text-base bg-gray-100 ">Tailwind</p>
                </div>
              </div>
              <div class="px-6 py-4 flex justify-between">
                <a href="#" class="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="" alt="" className="bg-gray-100 w-full h-[200px]" />
              <div class="px-6 py-4">
                <h5 class="text-xl font-bold mb-2">Card title</h5>
                <div className="flex gap-4">
                  <p class="text-gray-700 text-base bg-gray-100 ">React</p>
                  <p class="text-gray-700 text-base bg-gray-100 ">Tailwind</p>
                </div>
              </div>
              <div class="px-6 py-4 flex justify-between">
                <a href="#" class="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div>

            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img src="" alt="" className="bg-gray-100 w-full h-[200px]" />
              <div class="px-6 py-4">
                <h5 class="text-xl font-bold mb-2">Card title</h5>
                <div className="flex gap-4">
                  <p class="text-gray-700 text-base bg-gray-100 ">React</p>
                  <p class="text-gray-700 text-base bg-gray-100 ">Tailwind</p>
                </div>
              </div>
              <div class="px-6 py-4 flex justify-between">
                <a href="#" class="text-blue-500 hover:text-blue-700">
                  Go somewhere
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
