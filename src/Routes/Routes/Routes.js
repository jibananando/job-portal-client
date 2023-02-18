import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])

export default router;