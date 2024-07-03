import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div className="max-w-[1200px] mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;