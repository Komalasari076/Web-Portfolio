import Wave from "../../assets/WaveBottom.svg";

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
            UIUX dan Desain Graphic
          </h1>

          {/* Card 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src=""
                alt=""
                className="bg-gray-100 w-full h-[200px] object-cover"
              />
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

            {/* Card 2 */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src=""
                alt=""
                className="bg-gray-100 w-full h-[200px] object-cover"
              />
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

            {/* Card 3 */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                src=""
                alt=""
                className="bg-gray-100 w-full h-[200px] object-cover"
              />
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
      </div>
    </>
  );
}

export default Design;
