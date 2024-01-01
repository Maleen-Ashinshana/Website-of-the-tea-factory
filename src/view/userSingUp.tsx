import Logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";

import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";


function UserSingUp() {
    return <section className={'bg-gray-200 w-full h-screen'}>
        <img src={Logo} className={'w-56 p-2'}/>
        <p className={'text-5xl font-bold font-inter absolute left-[32%] p-7 text-gray-400 top-[25px]'}>Welcome To
            Evergreen</p>
        <div
            className={'bg-white w-[50%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            {/*<p className={'font-bold text-black text-2xl flex items-center justify-center relative top-[20px] font-mono'}>Sing
                Up</p>*/}
            <label className={'font-bold text-[20px] relative left-[10px] top-[10px]'}>Register Number :
                <label className={' relative left-[5%]'}>0001</label>
            </label>
            <div className={' w-[70%] h-[80%]  absolute left-0 right-0 top-0 bottom-0 m-auto'}>
                <Input type={'name'} name={'name'} placeholder={''} label={'Name'}/>
                <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20.5%] bg-gray-200 rounded-[7px]'}
                        id={'type'}>
                    <option selected>Select The Type</option>
                    <option>#</option>
                    <option>Galle</option>
                </select>
                <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20.5%] bg-gray-200 rounded-[7px]'}
                        id={'branch'}>
                    <option selected>Select The Branch</option>
                    <option>#</option>
                    <option>Galle</option>
                </select>
                <Input type={'contact1'} name={'contact1'} placeholder={''} label={'contact number 1'}/>
                <Input type={'contact2'} name={'contact2'} placeholder={''} label={'contact number 2'}/>
                <Link to={"/user-sing-in"}>
                    <button className={'min-btn relative left-[38%] top-[10px]'}>Sing Up</button>
                </Link>


            </div>


        </div>
    </section>
}

export default UserSingUp;