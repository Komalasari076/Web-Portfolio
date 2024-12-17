import Wave from "../../assets/WaveBottom.svg";
import Collection1 from "../../assets/collection1.jpg"
import Collection2 from "../../assets/collection2.jpg"
import Collection3 from "../../assets/collection3.jpg"

function Design() {
  return (
    <>
      <div className="relative min-w-[375px] pt-6 bg-slate-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Wave})` }}
        ></div>

        <div className="relative z-10 container mx-auto md:px-10 px-6 tracking-normal lg:pb-60 md:pb-50 pb-72">
          <h1 className="text-lg font-medium bg-slate-50 py-2 px-4 my-10 rounded-lg w-fit shadow-md">
            Green Frames
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={Collection1}
                alt="WeCare Project"
                className="w-full h-[200px] object-cover object-[50%_80%]"
              />
              <div className="px-6 py-4 bg-slate-50">
                <h5 className="text-lg font-bold mb-2">
                  Wecare (Team Project)
                </h5>
                <div className="flex justify-start gap-2 text-gray-700">
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    React
                  </p>
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    Tailwind
                  </p>
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    Express.js
                  </p>
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    MongoDB
                  </p>
                </div>
              </div>

              <a
                href="https://wecare-web-theta.vercel.app/"
                target="_blank"
                className="text-slate-800 "
              >
                <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100">
                  See More
                </div>
              </a>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={Collection2}
                alt="Portify Project"
                className="bg-gray-100 w-full h-[200px] object-cover object-[50%_70%]"
              />
              <div className="px-6 py-4 bg-slate-50">
                <h5 className="text-lg font-bold mb-2">
                  Portify (Personal Project)
                </h5>
                <div className="flex justify-start gap-2 pr-2 text-gray-700">
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    React
                  </p>
                  <p className="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    Tailwind
                  </p>
                </div>
              </div>

              <a
                href="https://portify-project.vercel.app/"
                target="_blank"
                className="text-slate-800 "
              >
                <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100">
                  See More
                </div>
              </a>
            </div>

            {/* Card 3 */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src={Collection3}
                alt="Landing Page"
                className="bg-gray-100 w-full h-[200px] object-cover"
              />
              <div class="px-6 py-4 bg-slate-50">
                <h5 class="text-lg font-bold mb-2">
                  Landing Page (Personal Project)
                </h5>
                <div className="flex justify-start gap-2 pr-2 text-gray-700">
                  <p class="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    HTML
                  </p>
                  <p class="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    CSS
                  </p>
                  <p class="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                    JavaScript
                  </p>
                </div>
              </div>

              <a
                href="https://workshop-landing-page-pi.netlify.app/"
                target="_blank"
                className="text-slate-800 "
              >
                <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100">
                  See More
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
