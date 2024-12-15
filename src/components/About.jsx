import { AiOutlineUser } from "react-icons/ai"; // Ant Design Icons
import { HiOutlineBriefcase } from "react-icons/hi"; // Heroicons
import { GiBinoculars } from "react-icons/gi"; // Game Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTree,
  faCampground,
  faLeaf,
  faCode,
  faLaptopCode,
  faStar,
  faPenNib,
  faUsers,
  faMapMarkerAlt,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <>
      <div className="w-full pt-10 text-gray-800">
        <div className="container mx-auto md:px-10 px-6 lg:mt-20 mt-8">
          <div className="border-b border-slate-300">
            <div className="flex flex-col md:flex-row justify-start items-start pb-10">
              <div className="md:w-1/4 w-full">
                <h1 className="text-lg font-medium md:mb-0 mb-4">
                  <AiOutlineUser className="inline mb-1" /> About Me &#8594;
                </h1>
              </div>

              <div className="lg:w-3/4 md:w-5/6 w-full space-y-2">
                <p>
                  <span className="font-medium">
                    Hello, I’m Siti Komalasari
                  </span>{" "}
                  <FontAwesomeIcon
                    icon={faCampground}
                    className="text-slate-500"
                  />
                  , a web developer{" "}
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className="text-slate-500"
                  />{" "}
                  focusing on inclusive technology and impactful digital
                  solutions{" "}
                  <FontAwesomeIcon icon={faStar} className="text-slate-500" />.
                  As a scholarship graduate of the{" "}
                  <span className="font-medium">
                    Perempuan Inovasi Bootcamp
                  </span>
                  , I have honed my skills in web development{" "}
                  <FontAwesomeIcon icon={faCode} className="text-slate-500" />,
                  UI/UX design{" "}
                  <FontAwesomeIcon icon={faPenNib} className="text-slate-500" />
                  , and team collaboration{" "}
                  <FontAwesomeIcon icon={faUsers} className="text-slate-500" />.
                </p>

                <p>
                  One of my most valuable experiences during the bootcamp was
                  creating <span className="font-medium">WeCare</span>, a
                  platform designed to{" "}
                  <span className="font-medium">
                    help women who have taken a career break to return to work
                    flexibly
                  </span>
                  . I believe technology is a bridge to positive change, and I
                  am committed to continually learning and creating digital
                  solutions that benefit society.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-start pb-10">
              <div className="md:w-1/4 w-full">
                <h1 className="text-lg font-medium md:mb-0 mb-4">
                  <HiOutlineBriefcase className="inline mb-1" /> Experience
                  &#8594;
                </h1>
              </div>

              <div className="lg:w-3/4 md:w-5/6 w-full space-y-2">
                <div className="">
                  <p className="font-medium text-lg">
                    Web Developer - Final Project Perempuan Inovasi Bootcamp
                  </p>
                  <p className="font-medium">
                    WeCare – Platform for Women Returning to Work
                  </p>
                  <p className="text-gray-600">Agust 2024 – November 2024</p>
                </div>

                <ul className="space-y-1">
                  <li>
                    <span className="bg-slate-200 px-1 rounded-md mr-1">
                      &#10003;
                    </span>
                    Collaborated to develop WeCare, a platform that supports
                    women in returning to work with flexible schedules
                  </li>
                  <li>
                    <span className="bg-slate-200 px-1 rounded-md mr-1">
                      &#10003;
                    </span>
                    Contributed to UI/UX design, including user research,
                    creating user flows, wireframes, and prototypes using Figma
                  </li>
                  <li>
                    <span className="bg-slate-200 px-1 rounded-md mr-1">
                      &#10003;
                    </span>
                    Led the front-end development by designing interactive and
                    responsive web pages using HTML, CSS, JavaScript, React,
                    Boostrap and Tailwind
                  </li>
                  <li>
                    <span className="bg-slate-200 px-1 rounded-md mr-1">
                      &#10003;
                    </span>
                    Tested the prototype and refined it based on feedback from
                    mentors
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start items-start md:pb-20 pb-10">
              <div className="md:w-1/4 w-full">
                <h1 className="text-lg font-medium md:mb-0 mb-4">
                  <GiBinoculars className="inline mb-1" /> What’s Next &#8594;
                </h1>
              </div>

              <div className="lg:w-3/4 md:w-5/6 w-full space-y-2">
                <p>
                  I have a deep interest in forests{" "}
                  <FontAwesomeIcon icon={faTree} className="text-slate-500" />,
                  particularly in Indonesia{" "}
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-slate-500"
                  />
                  , which is rich in biodiversity. Unfortunately, threats such
                  as deforestation and the loss of endemic species are
                  endangering their preservation.
                </p>
                <p>
                  To address this, I aim to delve deeper into{" "}
                  <span className="font-medium">Data Science</span>{" "}
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-slate-500"
                  />
                  . By leveraging data analysis, we can make smarter decisions
                  to optimize land use without sacrificing forest conservation.
                </p>
                <p>
                  I believe that technology{" "}
                  <FontAwesomeIcon icon={faCode} className="text-slate-500" />,
                  especially data science{" "}
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-slate-500"
                  />
                  , can be a powerful tool to preserve nature, protect our
                  forests, and ensure a greener future for generations to come{" "}
                  <FontAwesomeIcon icon={faLeaf} className="text-slate-500" />.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
