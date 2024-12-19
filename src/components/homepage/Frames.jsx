import Wave from "../../assets/WaveBottom.svg";
import Collection1 from "../../assets/collection1.jpg";
import Collection2 from "../../assets/collection2.jpg";
import Collection3 from "../../assets/collection3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Frames() {
  return (
    <>
      <div className="relative min-w-[375px] pt-6 bg-slate-100">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Wave})` }}
        ></div>

        <div className="relative z-10 container mx-auto md:px-10 px-6 tracking-normal lg:pb-60 md:pb-50 pb-72">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-medium bg-slate-50 py-2 px-4 my-10 rounded-lg w-fit shadow-md">
              Green Frames
            </h1>

            <span className="text-2xl font-bold bg-slate-50 px-1.5 pb-1 rounded-full shadow-lg hover:text-3xl">
              <Link to="/frames">&#8594;</Link>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
              {/* Gambar */}
              <img
                src={Collection1}
                alt="WeCare Project"
                className="w-full h-[200px] object-cover object-[50%_60%]"
              />

              {/* Judul */}
              <div className="px-6 pt-4">
                <h5 className="text-lg font-bold mb-2 text-slate-800">
                  Flower and Green 01
                </h5>
              </div>

              {/* Tombol */}
              <div className="px-6 py-4 flex justify-between gap-2 bg-slate-50 hover:bg-slate-100">
                <a
                  href={Collection1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faExpand} /> Lihat Full
                </a>
                <a
                  href={Collection1}
                  download="Flower and Green 01.jpg"
                  className="hover:text-green-500"
                >
                  <FontAwesomeIcon icon={faDownload} /> Unduh Foto
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
              {/* Gambar */}
              <img
                src={Collection2}
                alt="Portify Project"
                className="w-full h-[200px] object-cover object-[50%_100%]"
              />

              {/* Judul */}
              <div className="px-6 pt-4">
                <h5 className="text-lg font-bold mb-2 text-slate-800">
                  Cloud Canvas 01
                </h5>
              </div>

              {/* Tombol */}
              <div className="px-6 py-4 flex justify-between gap-2 bg-slate-50 hover:bg-slate-100">
                <a
                  href={Collection2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faExpand} /> Lihat Full
                </a>
                <a
                  href={Collection2}
                  download="Cloud Canvas 01.jpg"
                  className="hover:text-green-500"
                >
                  <FontAwesomeIcon icon={faDownload} /> Unduh Foto
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-50">
              {/* Gambar */}
              <img
                src={Collection3}
                alt="Landing Page"
                className="w-full h-[200px] object-cover"
              />

              {/* Judul */}
              <div className="px-6 pt-4">
                <h5 className="text-lg font-bold mb-2 text-slate-800">
                  Leafy Canopy 01
                </h5>
              </div>

              {/* Tombol */}
              <div className="px-6 py-4 flex justify-between gap-2 bg-slate-50 hover:bg-slate-100">
                <a
                  href={Collection3}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FontAwesomeIcon icon={faExpand} /> Lihat Full
                </a>
                <a
                  href={Collection3}
                  download="Leafy Canopy 01.jpg"
                  className="hover:text-green-500"
                >
                  <FontAwesomeIcon icon={faDownload} /> Unduh Foto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frames;
