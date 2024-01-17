import Logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";

import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";
import adminImg from "../assets/images/businessman_6997519-removebg-preview.png";
import usernameIMG from "../assets/images/download__13_-removebg-preview.png";
import passwordIMG from "../assets/images/download__14_-removebg-preview.png";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
import branch from "../assets/images/branch.png";
import type from "../assets/images/type.png";


function UserSingUp() {
    return <section className={'bg-gray-200 w-full h-screen'}>
        <img src={Logo} className={'w-56 p-2'}/>
        {/*<p className={'text-5xl font-bold font-inter absolute left-[32%] p-7 text-gray-400 top-[25px]'}>Welcome To
            Evergreen</p>*/}
        <div
            className={'bg-white w-[50%] h-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            {/*<p className={'font-bold text-black text-2xl flex items-center justify-center relative top-[20px] font-mono'}>Sing
                Up</p>*/}
           {/* <label className={'font-bold text-[20px] relative left-[10px] top-[10px]'}>Register Number :
                <label className={' relative left-[5%]'}>0001</label>
            </label>*/}
            <div className={' w-[70%] h-full  absolute left-0 right-0 top-0 bottom-0 m-auto'}>
                <img src={adminImg} className={'w-[24%] absolute left-0 right-0 m-auto mt-2'}/>
                <img src={usernameIMG} className={'w-[5%] absolute top-[22%] left-[10%]'}/>
                <img src={type} className={'w-[5%] absolute top-[33%] left-[10%]'}/>
                <img src={branch} className={'w-[5%] absolute top-[43%] left-[10%]'}/>
                <img src={phone} className={'w-[5%] absolute top-[53%] left-[10%]'}/>
                <img src={phone} className={'w-[5%] absolute top-[63%] left-[10%]'}/>
                <img src={email} className={'w-[5%] absolute top-[74%] left-[10%]'}/>
                <img src={passwordIMG} className={'w-[5%] absolute top-[85%] left-[10%]'}/>
                <div className={'w-full h-[83%] absolute left-0 right-0 bottom-0 m-auto'}>
                    <Input type={'name'} name={'name'} placeholder={''} label={'Name'}/>
                    <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20%] bg-gray-200 rounded-[7px]'}
                            id={'type'}>
                        <option selected>Select The Type</option>
                        <option>#</option>
                        <option>Galle</option>
                    </select>
                    <select className={' outline-none w-80 h-9 mt-[30px] relative left-[20%] bg-gray-200 rounded-[7px]'}
                            id={'branch'}>
                        <option selected>Select The Branch</option>
                        <option>#</option>
                        <option>Galle</option>
                    </select>
                    <Input type={'contact1'} name={'contact1'} placeholder={''} label={'contact number 1'}/>
                    <Input type={'contact2'} name={'contact2'} placeholder={''} label={'contact number 2'}/>
                    <Input type={'email'} name={'email'} placeholder={''} label={'email'}/>
                    <Input type={'password'} name={'password'} placeholder={''} label={'password'}/>
                </div>
                {/*<Input type={'name'} name={'name'} placeholder={''} label={'Name'}/>
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
                <Input type={'contact2'} name={'contact2'} placeholder={''} label={'contact number 2'}/>*/}
                <Link to={"/user-sing-in"}>
                    <button className={'min-btn absolute left-0 right-0 m-auto'}>Sing Up</button>
                </Link>


            </div>


        </div>
    </section>
}

export default UserSingUp;