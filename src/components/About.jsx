import AboutMe from "../assets/AboutMe.png";

function About() {
  return (
    <>
      <div className="w-full bg-slate-100 py-10 lg:py-20">
        <div className="container mx-auto md:px-10 px-8">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-10">
            <div className=" space-y-2">
              <p>
                I am a proud graduate of the Perempuan Inovasi Bootcamp, where I
                honed my skills in web development and teamwork.
              </p>
              <p>
                During the program, I collaborated with an incredible team to
                create a final project focused on improving access to job
                opportunities for women career break.
              </p>
              <p>
                This experience not only strengthened my technical abilities but
                also deepened my understanding of how technology can address
                real-world challenges.
              </p>
              <p>
                Our journey started with UI/UX design, which included research,
                creating user flows, developing wireframes, and building a
                prototype. All of this laid the foundation for the final web
                project, which we presented during our Demo Day.
              </p>

              <button className="lg:py-6 hover:text-blue-600">
                More &rarr;
              </button>
            </div>

            <div className="pb-8 lg:pb-0">
              <img src={AboutMe} alt="" />
            </div>
          </div>

          {/* <div className=" flex justify-center gap-6">
            <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
            <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
            <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default About;
