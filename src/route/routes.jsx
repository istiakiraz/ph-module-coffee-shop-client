import { createBrowserRouter } from "react-router";
import Mainlayouts from "../layouts/Mainlayouts";
import App from "../App";
import HomePages from "../pages/HomePages";
import AddCoffeePage from "../pages/AddCoffeePage";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee";

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
                path:"coffee/:id",
                Component: CoffeeDetails,
                loader:()=> fetch('http://localhost:3000/coffees')

            },
            {
                path: 'add-coffee',
                Component: AddCoffeePage

            },
            {
                path: 'update-coffee/:id',
                Component: UpdateCoffee,
                loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`)

            }
        ]
    }




])