
import './App.css'
import AdminSingIn from "./view/adminSingIn.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminSingUp from "./view/adminSingUp.tsx";
import UserSingIn from "./view/userSingIn.tsx";
import UserSingUp from "./view/userSingUp.tsx";
;
function App() {


  return (
    <>
<div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<AdminSingIn/>}></Route>
            <Route path={"/adminSingUp"} element={<AdminSingUp/>}></Route>
            <Route path={"/userSingIn"} element={<UserSingIn/>}></Route>
            <Route path={"/userSingUp"} element={<UserSingUp/>}></Route>
        </Routes>
    </BrowserRouter>
</div>
    </>
  )
}

export default App
