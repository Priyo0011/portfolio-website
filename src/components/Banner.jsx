import profile from "../assets/images/profile/about.png";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { RxBorderSolid } from "react-icons/rx";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="md:flex justify-between">
      <div className="md:mt-48 ml-8">
        <h1 data-aos="fade-right" data-aos-duration="1000">
          <span className="text-2xl mr-4">- I M</span>{" "}
          <span className="text-5xl text-[#a2e9ee]">Priyotosh Biswas</span>
        </h1>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-2xl font-semibold mt-2 mb-4"
        >
          Junior Web Developer || Front End Developer
        </p>
        <button
          data-aos="fade-right"
          data-aos-duration="1000"
          className="hover:border-[#a2e9ee] border-2 p-2 rounded-lg font-semibold text-white  hover:text-[#a2e9ee]  "
        >
          <Link to='https://docs.google.com/document/d/1rPn6l2raBaGZT0Y_Ykz4AvEN1jhFyahK9OrTqTpVWQw/export?format=pdf'>Get Resume</Link>
          
        </button>
        <div  className="flex items-center">
          <div data-aos="fade-right"
          data-aos-duration="1000" className="flex"><h1  className="text-2xl mt-4">Follow Me</h1>
          <RxBorderSolid className="text-[#3ad8e4] text-2xl font-mono mt-4 m-2" /></div>
          <div className="flex mt-4 gap-2">
            <button data-aos="zoom-out-up" data-aos-delay="200" className="text-3xl text-[#A1A2A3] hover:text-white">
              {" "}
              <Link to="https://www.linkedin.com/in/priyotosh-biswas">
              <FaLinkedin />
              </Link>
            </button>
            <button data-aos="zoom-out-up" data-aos-delay="400" className="text-3xl text-[#A1A2A3] hover:text-white">
              {" "}
              <Link to="https://www.facebook.com/Priyotosh0011">
                <FaFacebookSquare />
              </Link>
            </button>
            <button data-aos="zoom-out-up" data-aos-delay="600" className="text-3xl text-[#A1A2A3] hover:text-white">
              {" "}
              <Link to="https://github.com/Priyo0011">
                <FaSquareGithub />
              </Link>
            </button>
            <button data-aos="zoom-out-up" data-aos-delay="800" className="text-3xl text-[#A1A2A3] hover:text-white">
              {" "}
              <Link to="https://www.facebook.com/Priyotosh0011">
              <FaInstagramSquare />
              </Link>
            </button>
            <button data-aos="zoom-out-up" data-aos-delay="1000" className="text-3xl text-[#A1A2A3] hover:text-white">
              {" "}
              <Link to="https://twitter.com/PBPriyo0011">
              <FaSquareXTwitter />
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        <img src={profile} className="w-[500px] opacity-80" alt="" />
      </div>
    </div>
  );
};

export default Banner;
