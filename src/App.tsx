
import './App.css'
import AdminSingIn from "./view/adminSingIn.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminSingUp from "./view/adminSingUp.tsx";
import UserSingIn from "./view/userSingIn.tsx";
import UserSingUp from "./view/userSingUp.tsx";
import UserTeaLeaves from "./view/userTeaLeaves.tsx";
import OrderingTeaPowder from "./view/orderingTeaPowder.tsx";
import OrderingTeaFertilizer from "./view/orderingTeaFertilizer.tsx";

import Fertilizer from "./view/fertilizer.tsx";
import TeaOrder from "./view/teaOrder.tsx";
import TeaProduct from "./view/teaProduct.tsx";
import TeaItem from "./view/teaItem.tsx";
import Home from "./view/home.tsx";







;
function App() {


  return (
    <>
<div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<AdminSingIn/>}></Route>
            <Route path={"/admin-sing-up"} element={<AdminSingUp/>}></Route>
            <Route path={"/user-sing-in"} element={<UserSingIn/>}></Route>
            <Route path={"/user-sing-up"} element={<UserSingUp/>}></Route>
            <Route path={"/user-tea-leaves"} element={<UserTeaLeaves/>}></Route>
            <Route path={"/user-tea-powder"} element={<OrderingTeaPowder/>}></Route>
            <Route path={"/user-tea-fertilize"} element={<OrderingTeaFertilizer/>}></Route>
            {/*<Route path={"/fertilize"} element={<Fertilize/>}></Route>*/}
            <Route path={"/fertilizer"} element={<Fertilizer/>}></Route>
            <Route path={"/tea"} element={<TeaOrder/>}></Route>
            <Route path={"/teaProduct"} element={<TeaProduct/>}></Route>
            <Route path={"/teaItem"} element={<TeaItem/>}></Route>
            <Route path={"/home"} element={<Home/>}></Route>





        </Routes>
    </BrowserRouter>
</div>
    </>
  )
}

export default App
