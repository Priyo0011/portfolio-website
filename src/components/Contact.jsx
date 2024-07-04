import { IoMail } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { RxBorderSolid } from "react-icons/rx";
import emailjs from "@emailjs/browser";
import {
  FaLocationDot,
  FaSquareGithub,
  FaSquareXTwitter,
} from "react-icons/fa6";
import "./Contact.css";
import { toast } from "react-toastify";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log(e.target.value);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g6uypy5",
        "template_1rkzgeb",
        form.current,
        "q3yfkF7u1fylQuqzA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast.success("Thank for contact me.I will reply soon. ");
  };
  return (
    <div>
      <div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex m-10"
        >
          <h1 className="text-3xl">Contact Me</h1>
          <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
        </div>
        <div className="col-md-6 text-center">
          <form className="mt-5 " ref={form} onSubmit={sendEmail}>
            <div>
              <input
                type="text"
                name="from_name"
                placeholder="Enter Name Here"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="from_email"
                placeholder="Enter Email Here"
                required
              />
            </div>
            <div>
              <textarea
                className="message mt-4"
                name="message"
                placeholder="Message Here"
              />
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="flex mt-10 justify-center">
          <div className="bg-[#3f3d3d] pt-2 px-20 rounded-lg">
          <button className="text-3xl  hover:text-[#a2e9ee]">
            {" "}
            <Link to="https://www.linkedin.com/in/priyotosh-biswas">
              <FaLinkedin />
            </Link>
          </button>
          <button className="text-3xl  hover:text-[#a2e9ee]">
            {" "}
            <Link to="https://www.facebook.com/Priyotosh0011">
              <FaFacebookSquare />
            </Link>
          </button>
          <button className="text-3xl hover:text-[#a2e9ee]">
            {" "}
            <Link to="https://github.com/Priyo0011">
              <FaSquareGithub />
            </Link>
          </button>
          <button className="text-3xl hover:text-[#a2e9ee]">
            {" "}
            <Link to="https://www.facebook.com/Priyotosh0011">
              <FaInstagramSquare />
            </Link>
          </button>
          <button className="text-3xl hover:text-[#a2e9ee]">
            {" "}
            <Link to="https://twitter.com/PBPriyo0011">
              <FaSquareXTwitter />
            </Link>
          </button>
          </div>
        </div>
        <div className="md:flex justify-center gap-10 mt-8">
          <div>
            <button className="bg-[#3f3d3d] rounded-lg p-3 ml-20 md:mb-0 mb-8 md:ml-0 font-semibold text-white  hover:text-[#a2e9ee]  ">
              <span className="flex text-center ">
                {" "}
                <IoMail className="text-2xl mr-2" />
                <span className="text-[#a2e9ee]">apriyotosh0011@gmail.com</span>
              </span>
            </button>
          </div>
          <div>
            <button className="bg-[#3f3d3d] rounded-lg py-3 ml-20 md:ml-0 px-16 font-semibold text-white  hover:text-[#a2e9ee]  ">
              <span className="flex text-center ">
                {" "}
                <FaPhoneAlt className="text-xl mr-2" />
                <span className="text-[#a2e9ee]">+880191618032</span>
              </span>
            </button>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#3f3d3d] rounded-lg py-3 px-16 font-semibold text-white  hover:text-[#a2e9ee]  ">
            <span className="flex text-center ">
              <FaLocationDot className="text-xl mr-2" />
              <span className="text-[#a2e9ee]">Khulna,Bangladesh</span>
            </span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
