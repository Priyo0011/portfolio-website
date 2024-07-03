import { RxBorderSolid } from "react-icons/rx";
import photo from '../assets/images/profile/about.png'
const About = () => {
  return (
    <div className="mt-32">
      <div data-aos="fade-right" data-aos-duration="1000" className="flex mb-10">
        <h1  className="text-3xl">About Me</h1>
        <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
      </div>
      <div className="flex justify-between mt-4">
      <div data-aos="zoom-in-down" data-aos-duration="1500" className="w-[1100px]">
            <img src={photo} className="rounded-full border-4 border-[#3ad8e4]" alt="" />
        </div>
        <div>
          <p className="mt-4 text-xl ml-24">
          Hey there! It's me Priyotosh Biswas, I am a junior web developer, having an Intermediate in web
            development. Highly interested in expertise in Web development .The
            inception of my journey in web development sparked from mere
            curiosity, evolving into an enduring dedication and unwavering
            commitment. This fervor propels my quest to master the intricacies
            of web development while continuously embracing new knowledge and
            advancements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
