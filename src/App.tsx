
import './App.css'
import AdminSingIn from "./view/adminSingIn.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminSingUp from "./view/adminSingUp.tsx";
import UserSingIn from "./view/userSingIn.tsx";
import UserSingUp from "./view/userSingUp.tsx";
import UserTeaLeaves from "./view/userTeaLeaves.tsx";
import OrderingTeaPowder from "./view/orderingTeaPowder.tsx";


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


        </Routes>
    </BrowserRouter>
</div>
    </>
  )

}


export default App
