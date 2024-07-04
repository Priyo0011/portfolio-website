import { RxBorderSolid } from "react-icons/rx";
import photo from "../assets/images/profile/about.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="mt-20">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex mb-10"
      >
        <h1 className="text-3xl">About Me</h1>
        <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
      </div>
      <div className="md:flex justify-between mt-4">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="md:w-[1100px]"
        >
          <img
            src={photo}
            className="rounded-full border-4 border-[#3ad8e4] mt-24"
            alt=""
          />
        </div>
        <div data-aos="zoom-in" data-aos-delay="400">
          <p className="mt-4 text-xl md:ml-24 ml-4">
            Hey there! It's me Priyotosh Biswas, I am a junior web developer,
            having an Intermediate in web development. Highly interested in
            expertise in Web development .The inception of my journey in web
            development sparked from mere curiosity, evolving into an enduring
            dedication and unwavering commitment. This fervor propels my quest
            to master the intricacies of web development while continuously
            embracing new knowledge and advancements.
            <hr className="mt-4" />
          </p>
          <div className="ml-4 md:ml-24 mt-4">
            <p>
              Birthday <span className="ml-2">:</span> 10 December,2000
            </p>
            <p>
              Phone <span className="ml-9">:</span> +8801991618032
            </p>
            <p>
              Email <span className="ml-9">:</span> priyotosh0011@gmail.com{" "}
            </p>
            <p>
              From <span className="ml-12">:</span> Khulna,Bangladesh
            </p>
            <p>
              Language <span className="ml-2">:</span> Bangla,English
            </p>
            <button
              className="mt-4 hover:border-[#a2e9ee] border p-2 py-1 rounded-lg  text-white  hover:text-[#a2e9ee]  "
            >
              <Link to='https://docs.google.com/document/d/1l_iDFp9B2AqEyOb3FEqLnAOTMETUycj9pAJE50mw6gM/export?format=pdf'> Download CV</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
