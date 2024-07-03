import About from "../components/About";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Project from "../components/Project";


import Skills from "../components/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <Skills></Skills>
            <Project></Project>    
            <About></About>
            <Education></Education>
            <Contact></Contact>
        </div>
    );
};

export default Home;