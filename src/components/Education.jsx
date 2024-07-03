import { RxBorderSolid } from "react-icons/rx";

const Education = () => {
  return (
    <div className="mt-20">
        <div data-aos="fade-right" data-aos-duration="1000" className="flex">
        <h1  className="text-3xl">My Education</h1>
        <RxBorderSolid className="text-[#3ad8e4] text-6xl font-mono" />
      </div>
      <div className="mt-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="timeline-start mb-10 md:text-end"
            >
              <time className="font-mono italic">2015-2017</time>
              <div className="text-xl font-black text-[#3ad8e4]">
                S.S.C <span className="text-lg">(science)</span>
              </div>
              <p className="text-xl mb-4">Nakipur H.C Pilot Model High School</p>
              <p>SSC is a 10th-grade education which is an important public certificate in Bangladesh. The 9th class and 10th class have to participate in the public examination SSC after two years of study.</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="timeline-end mb-10"
            >
              <time className="font-mono italic">2017-2019</time>
              <div className="text-xl font-black text-[#3ad8e4]">
                H.S.C <span className="text-lg">(science)</span>
              </div>
              <p className="text-xl mb-4">Shyamnagar Govt. Mohsin Degree College</p>
              <p>HSC is a 12th-grade education which is an important public certificate in Bangladesh. The class 11th and 12th class have to participate in the public examination HSC after two years of study.</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="timeline-start mb-10 md:text-end"
            >
              <time className="font-mono italic">2019-2024</time>
              <div className="text-xl font-black text-[#3ad8e4]">
                B.Sc. Honours <span className="text-lg">(Botany)</span>
              </div>
              <p className="text-xl mb-4"> Govt. B.L. College, Khulna, Bangladesh</p>
              <p>Bachelor of  Science Honors in Botany is an undergraduate Botany course. Botany is the  science that studies the structure of plants, the functions of their components, the locations of their growth, categorization, and the terminology used in their description and naming.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
