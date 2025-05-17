import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import App from "../App";
import HomePages from "../pages/HomePages";
import AddCoffeePage from "../pages/AddCoffeePage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Mainlayouts></Mainlayouts>,
        children: [
            {
                index: true,
                Component: HomePages,
                loader: ()=> fetch('http://localhost:3000/coffees')
            },
            {
                path: 'add-coffee',
                Component: AddCoffeePage

            }
        ]
    }




])