import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="w-full pt-8">
        <div className="container mx-auto md:px-10 px-6 bg-transparent bg-slate-100">
          <div>
            <div className="flex flex-col md:flex-row justify-between items-start tracking-normal">
              {/* Logo*/}
              <div className="flex items-center mb-4">
                <img src={Logo} alt="Logo WeCare" width="60px" />
              </div>

              <div className="flex flex-col md:flex-row justify-between md:space-x-28 items-start">
                {/* Navigasi */}
                <div className="mb-10">
                  <h4 className="text-lg font-bold mb-4">Navigasi</h4>
                  <div className="flex flex-col space-y-3 font-semibold list-none text-gray-800">
                    <li className="hover:text-red">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-red" href="about.html">
                      <Link to="/about">About</Link>
                    </li>
                    <li className=" hover:text-red">
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className=" hover:text-red">
                      <Link to="/design">Design</Link>
                    </li>
                  </div>
                </div>

                {/* Full Stack */}
                <div className="mb-10">
                  <h4 className="text-lg font-bold mb-4 ">Full Stack</h4>
                  <div className="flex flex-col space-y-3 font-semibold text-gray-800 ">
                    <p>WeCare</p>
                    <p>Portify</p>
                    <p>Landing Page</p>
                    <p>Logic Web</p>
                  </div>
                </div>

                {/* UI UX */}
                <div className="mb-10">
                  <h4 className="text-lg font-bold mb-4">UI UX</h4>
                  <div className="space-y-2 font-semibold text-gray-800">
                    <p>WeCare</p>
                    <p>Portify</p>
                    <p>IntoSea</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Start */}
            <div className=" border-t border-slate-300 py-4">
              <div className="container mx-auto text-center flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-semibold">Copyright 2024 Siti Komalasari</p>

                <div className="flex justify-between gap-4 text-2xl">
                  <a
                    href="mailto:sitikomala076@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://github.com/Komalasari076"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/siti-komalasari-53b940312/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
            {/* Copyright End */}
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Footer;
