import { RxBorderSolid } from "react-icons/rx";
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
        <div data-aos="fade-left"data-aos-delay="100" className="p-6 bg-[#A1A2A3] text-end hover:shadow-2xl hover:shadow-[#A1A2A3]">
          <img className="md:w-96 h-60" src='https://i.postimg.cc/t408pZz3/Byte-Blaze.png' alt="" />
          <button className="mt-6 mr-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://github.com/Priyo0011/byteblaze-react">Code Link</Link>
          </button>
          <button className="mt-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://flowery-earthquake.surge.sh">Live Link</Link>
          </button>
        </div>
        <div data-aos="fade-left"data-aos-delay="200" className="p-6 bg-[#A1A2A3] text-end hover:shadow-2xl hover:shadow-[#A1A2A3]">
          <img className="w-96 h-60" src='https://i.postimg.cc/4yYNk71C/scholarship.png' alt="" />
          <button className="mt-6 mr-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://github.com/Priyo0011/scholarship-client">Code Link</Link>
          </button>
          <button className="mt-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://scholarship-91d7e.web.app/">Live Link</Link>
          </button>
        </div>
        <div data-aos="fade-left"data-aos-delay="300" className="p-6 bg-[#A1A2A3] text-end hover:shadow-2xl hover:shadow-[#A1A2A3]">
          <img className="w-96 h-60" src='https://i.postimg.cc/4yvRvthq/cooking.png' alt="" />
          <button className="mt-6 mr-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://github.com/Priyo0011/chefs-table-react">Code Link</Link>
          </button>
          <button className="mt-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://thankful-throne.surge.sh/">Live Link</Link>
          </button>
        </div>
        <div data-aos="fade-left"data-aos-delay="400" className="p-6 bg-[#A1A2A3] text-end hover:shadow-2xl hover:shadow-[#A1A2A3]">
          <img className="w-96 h-60" src='https://i.postimg.cc/CxQXqJQd/book-vibe.png' alt="" />
          <button className="mt-6 mr-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://github.com/Priyo0011/book-review">Code Link</Link>
          </button>
          <button className="mt-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://juvenile-legs222.surge.sh/">Live Link</Link>
          </button>
        </div>
        <div data-aos="fade-left"data-aos-delay="500" className="p-6 bg-[#A1A2A3] text-end hover:shadow-2xl hover:shadow-[#A1A2A3]">
          <img className="w-96 h-60" src='https://i.postimg.cc/4d5PRbjX/luxury.png' alt="" />
          <button className="mt-6 mr-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://github.com/Priyo0011/luxury-property">Code Link</Link>
          </button>
          <button className="mt-6 hover:border-[#a2e9ee] border-2 px-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  ">
            <Link to="https://luxury-property-f726b.web.app/">Live Link</Link>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
