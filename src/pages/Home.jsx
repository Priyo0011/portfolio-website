import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Footer from "../components/Footer";

import Project from "../components/Project";


import Skills from "../components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <div>
            <div  className="max-w-[1200px] mx-auto">
            <Banner></Banner>
            <Skills></Skills>
            <Project></Project>    
            <About></About>
            <Education></Education>
            <Contact></Contact>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;