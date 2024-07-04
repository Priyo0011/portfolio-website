import img1 from "../assets/images/technologies/HTML5.png";
import img2 from "../assets/images/technologies/CSS3.png";
import img3 from "../assets/images/technologies/TAILWIND.png";
import img4 from "../assets/images/technologies/JS.png";
import img5 from "../assets/images/technologies/REACT.png";
import img6 from "../assets/images/technologies/FIREBASE.png";
import img7 from "../assets/images/technologies/NODEJS.png";
import img8 from "../assets/images/technologies/MONGODB.png";
import img9 from "../assets/images/technologies/EXPRESSJS.png";
import { RxBorderSolid } from "react-icons/rx";

const Skills = () => {
  return (
    <div className="mt-20 mb-10">
      <div data-aos="fade-right" data-aos-duration="1000" className="flex">
        <h1 className="text-3xl">My Skills</h1>
        <RxBorderSolid className="text-[#a2e9ee] text-6xl font-mono" />
      </div>
      <div className="mt-4">
        <div className="md:flex justify-center gap-10">
          <div data-aos="fade-left"data-aos-delay="100" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img1} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
              HTML5
            </h1>
          </div>
          <div data-aos="fade-left"data-aos-delay="200" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img2} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
             css3
            </h1>
          </div>
          <div data-aos="fade-left"data-aos-delay="300" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img3} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            TAILWIND
            </h1>
          </div>
          <div data-aos="fade-left"data-aos-delay="400" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img4} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            java script
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center gap-10">
          <div data-aos="fade-right"data-aos-delay="100" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img5} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            REACT
            </h1>
          </div>
          <div data-aos="fade-right"data-aos-delay="200" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img6} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            FIRE BASE
            </h1>
          </div>
          <div data-aos="fade-right"data-aos-delay="300" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img7} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            NODE JS
            </h1>
          </div>
        </div>
        <div className="md:flex justify-center gap-10">
          <div data-aos="fade-left"data-aos-delay="100" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img8} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            MONGO DB
            </h1>
          </div>
          <div data-aos="fade-left"data-aos-delay="200" className="my-4 bg-white rounded-xl shadow-black shadow-xl">
            <img className="mx-10 my-6" src={img9} width="60" alt="" />
            <h1 className="text-center text-black font-bold m-2 uppercase">
            EXPRESS JS
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
