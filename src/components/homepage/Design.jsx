import Wave from "../../assets/WaveBottom.svg";
import Research from "../../assets/Research.png";
import Wireframe from "../../assets/Wireframe.png";
import Prototype from "../../assets/Prototype.png";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        </div>
      </div>
    </>
  );
}

export default Design;
