
import './App.css'
import AdminSingIn from "./view/adminSingIn.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminSingUp from "./view/adminSingUp.tsx";
import UserSingIn from "./view/userSingIn.tsx";
;
function App() {


  return (
    <>
<div>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<AdminSingIn/>}></Route>
            <Route path={"/singup"} element={<AdminSingUp/>}></Route>
            <Route path={"/userSingIn"} element={<UserSingIn/>}></Route>
        </Routes>
    </BrowserRouter>
</div>
    </>
  )
}

export default App
