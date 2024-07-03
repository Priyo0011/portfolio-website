import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/blog",
                element:<Blog></Blog>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
        ]
    }
])