import { IoMail } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { RxBorderSolid } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
      <div>
      <div data-aos="fade-right" data-aos-duration="1000" className="flex m-10">
        <h1  className="text-3xl">Contact Me</h1>
        <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
      </div>
        <div className="flex justify-center gap-10">
          <div>
            <button className="bg-[#3f3d3d] rounded-lg p-3 font-semibold text-white  hover:text-[#a2e9ee]  ">
              <span className="flex text-center ">
                {" "}
                <IoMail className="text-2xl mr-2" />
                <span className="text-[#a2e9ee]">priyotosh0011@gmail.com</span>
              </span>
            </button>
          </div>
          <div>
            <button className="bg-[#3f3d3d] rounded-lg py-3 px-16 font-semibold text-white  hover:text-[#a2e9ee]  ">
              <span className="flex text-center ">
                {" "}
                <FaPhoneAlt className="text-xl mr-2" />
                <span className="text-[#a2e9ee]">+880191618032</span>
              </span>
            </button>
          </div>
        </div>
        <div className="text-center m-8">
          <button className="bg-[#3f3d3d] rounded-lg py-3 px-16 font-semibold text-white  hover:text-[#a2e9ee]  ">
            <span className="flex text-center ">
              <FaPhoneAlt className="text-xl mr-2" />
              <span className="text-[#a2e9ee]">+880191618032</span>
            </span>
          </button>
        </div>
      </div>
      <div className="flex mt-4 gap-4 justify-center mb-20">
            <button className="text-4xl  hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://www.linkedin.com/in/priyotosh-biswas">
              <FaLinkedin />
              </Link>
            </button>
            <button className="text-4xl  hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://www.facebook.com/Priyotosh0011">
                <FaFacebookSquare />
              </Link>
            </button>
            <button className="text-4xl hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://github.com/Priyo0011">
                <FaSquareGithub />
              </Link>
            </button>
            <button  className="text-4xl hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://www.facebook.com/Priyotosh0011">
              <FaInstagramSquare />
              </Link>
            </button>
            <button  className="text-4xl hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://twitter.com/PBPriyo0011">
              <FaSquareXTwitter />
              </Link>
            </button>
          </div>
    </div>
  );
};

export default Contact;
