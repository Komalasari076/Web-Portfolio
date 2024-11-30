import Logo from "../assets/logoWecare.png";

function About() {
  return (
    <>
      <div className="w-full py-6 my-6">
        <div className="container mx-auto md:px-10 px-6 tracking-normal flex justify-center items-start gap-20">
          <div className="w-1/2">
            <div className="space-y-2 pb-8">
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
            </div>

            <div className="flex gap-4">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={Logo} alt="Image description" />
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
                <img class="w-full" src={Logo} alt="Image description" />
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
                <img class="w-full" src={Logo} alt="Image description" />
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
            </div>
          </div>

          <div className="w-1/2 flex justify-center gap-6">
            <div className="flex flex-col gap-6">
              <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
              <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
              <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
            </div>
            <div className="flex flex-col gap-6">
              <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
              <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
              <img src="" alt="" className="bg-gray-100 w-[300px] h-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
