import WeCare from "../assets/WeCare.png";
import Portify from "../assets/Portify.png";
import LandingPage from "../assets/LandingPage.png";
import LogicWeb from "../assets/LogicWeb.png";
import TodoList from "../assets/Todo List.png";
import BMI from "../assets/BMI calculator.png";

function Portfolio() {
  return (
    <>
      <div className="w-full lg:pt-20 md:pt-12 pt-10">
        <div className="container mx-auto md:px-10 px-6 tracking-normal ">
          <div className="border-b border-slate-300">
            <h1 className="text-lg font-medium bg-slate-50 py-2 px-4 md:my-10 my-8 rounded-lg w-fit shadow-md">
              Full Stack Developer
            </h1>

            {/* Card 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:pb-20 pb-14">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={WeCare}
                  alt="WeCare Project"
                  className="w-full h-[200px] object-cover "
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
                  <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100 hover:font-semibold">
                    See More
                  </div>
                </a>
              </div>

              {/* Card 2 */}
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={Portify}
                  alt="Portify Project"
                  className="bg-gray-100 w-full h-[200px] object-cover"
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
                  <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100 hover:font-semibold">
                    See More
                  </div>
                </a>
              </div>

              {/* Card 3 */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={LandingPage}
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
                  <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100 hover:font-semibold">
                    See More
                  </div>
                </a>
              </div>

              {/* Card 4 */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={LogicWeb}
                  alt="Logic Web"
                  className="bg-gray-100 w-full h-[200px] object-cover"
                />
                <div class="px-6 py-4 bg-slate-50">
                  <h5 class="text-lg font-bold mb-2">
                    Logic Web (Personal Project)
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
                  href="https://logic-web.vercel.app/"
                  target="_blank"
                  className="text-slate-800 "
                >
                  <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100 hover:font-semibold">
                    See More
                  </div>
                </a>
              </div>

              {/* Card 5 */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={TodoList}
                  alt="Todo List"
                  className="bg-gray-100 w-full h-[200px] object-cover"
                />
                <div class="px-6 py-4 bg-slate-50">
                  <h5 class="text-lg font-bold mb-2">
                    Todo List Day (Personal Project)
                  </h5>
                  <div className="flex justify-start gap-2 pr-2 text-gray-700">
                    <p class="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                      React
                    </p>
                    <p class="text-sm bg-gray-100 px-2 py-1 rounded-md shadow-md">
                      Tailwind
                    </p>
                  </div>
                </div>

                <a
                  href="https://todo-list-day.netlify.app/"
                  target="_blank"
                  className="text-slate-800 "
                >
                  <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100 hover:font-semibold">
                    See More
                  </div>
                </a>
              </div>

              {/* Card 6 */}
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  src={BMI}
                  alt="BMI Calculator"
                  className="bg-gray-100 w-full h-[200px] object-cover"
                />
                <div class="px-6 py-4 bg-slate-50">
                  <h5 class="text-lg font-bold mb-2">
                    BMI Calculator (Personal Project)
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
                  href="https://bmi-calculator-nu-gold.vercel.app/"
                  target="_blank"
                  className="text-slate-800 "
                >
                  <div className="px-6 py-4 flex justify-between bg-slate-50 hover:bg-slate-100 hover:font-semibold">
                    See More
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
