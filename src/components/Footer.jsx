import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { FaSquareGithub, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#3f3d3d] mt-10 md:mt-40">
      <div className="md:max-w-[1200px] mx-auto">
      <div className="md:flex justify-between p-8">
        <div>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full"
                src={logo}
                alt="logo"
                width="40"
                height="40"
              />
            </div>
          </div>
          <p className="text-sm">Priyotosh Biswas Ltd.</p>
        </div>
        <div>
          <h6 className="text-sm font-bold">Social</h6>
          <div className="flex mt-4 gap-4 md:justify-center">
            <button className="text-xl  hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://www.linkedin.com/in/priyotosh-biswas">
                <FaLinkedin />
              </Link>
            </button>
            <button className="text-xl  hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://www.facebook.com/Priyotosh0011">
                <FaFacebookSquare />
              </Link>
            </button>
            <button className="text-xl hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://github.com/Priyo0011">
                <FaSquareGithub />
              </Link>
            </button>
            <button className="text-xl hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://www.facebook.com/Priyotosh0011">
                <FaInstagramSquare />
              </Link>
            </button>
            <button className="text-xl hover:text-[#a2e9ee]">
              {" "}
              <Link to="https://twitter.com/PBPriyo0011">
                <FaSquareXTwitter />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
