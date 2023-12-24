import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import main from "../assets/images/regulaar.jpg"
import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";

function UserSingIn() {
    return <section className={'bg-gray-200 w-full h-screen'}>
        <img src={logo} className={'w-48 relative top-[5px] '}/>
        <p className={'font-bold text-gray-500 text-4xl font-mono relative left-[40%] top-[30px]'}>Welcome To
            Evergreen</p>
        <div
            className={'bg-white w-[60%] h-[65%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            <div className={'w-[50%]  h-[80%] bg-gray-600 relative left-[20px] top-[50px] rounded-[7px]'}>
                <img src={main} className={'w-screen h-full '}/>
            </div>
            <div className={' w-[48%] h-full absolute right-0 top-0'}>
                <p className={' text-gray-500 text-center relative top-[80px] font-bold font-mono text-[40px]'}>Sing
                    In</p>
                <div className={'w-full h-[40%] relative top-[20%]'}>
                    <Input type={'username'} name={'username'} placeholder={''} label={'username'}/>
                    <Input type={'password'} name={'register number'} placeholder={''} label={'register number'}/>
                    <Link to={"/user-tea-leaves"}>
                        <button className={'min-btn left-[35%]'}>Sing In</button>
                    </Link>

                </div>
               <span className={'absolute bottom-[15%] left-[15%]'}>Don You Have An Account?
                   <Link to={"/userSingUp"}>
                       <span className={'text-blue-700 relative left-[10px]'}>Sing Up</span>
                   </Link>

               </span>
            </div>
        </div>
    </section>
}

export default UserSingIn;