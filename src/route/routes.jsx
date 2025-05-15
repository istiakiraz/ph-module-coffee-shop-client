import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import App from "../App";
import HomePages from "../pages/HomePages";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Mainlayouts></Mainlayouts>,
        children: [
            {
                index: true,
                Component: HomePages
            },
            {

            }
        ]
    }




])