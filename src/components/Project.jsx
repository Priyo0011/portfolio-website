import { RxBorderSolid } from "react-icons/rx";
import ByteBlaze from '../assets/images/Project/ByteBlaze.png'
import { Link } from "react-router-dom";
const Project = () => {

  return (
    <div className="mt-20">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex mb-10"
      >
        <h1 className="text-3xl">My Project</h1>
        <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="p-6 bg-[#A1A2A3] text-end">
          <img className="w-96 h-60" src={ByteBlaze} alt="" />
          <button className="mt-6 hover:border-[#a2e9ee] border-2 p-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://flowery-earthquake.surge.sh">Live Side</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
