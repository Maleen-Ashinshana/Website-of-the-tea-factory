import logo from '../assets/images/Evergreen_Logo_Primary_Full_4Col.png'
import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";


function AdminSingIn() {

    return <section className={'bg-gray-200 w-full h-screen'}>
        <div
            className={'bg-white w-4/5 h-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            <p className={'text-5xl font-bold font-inter absolute left-[28%] p-7 text-gray-400 '}>Welcome To
                Evergreen</p>
            <div className={' w-[40%] h-[30%] relative left-[5%] top-[30%]'}>
                <img src={logo} className={'w-full h-full'} title="logo" alt="logo"/>
            </div>
            <div className={' w-[42%] h-[85%] absolute right-2 top-[13%]'}>
                <p className={'font-bold text-[32px] flex items-center justify-center p-7 text-gray-400 relative top-[20px]'}>Sing
                    In</p>

                <select className={'  outline-none w-80 h-9 mt-[30px] relative left-[19%] bg-gray-200 rounded-[7px]'}
                        id={'owner_type'}>
                    <option selected>Select Type</option>
                    <option>Admin</option>
                    <option>Branch Owner</option>
                </select>
                <select className={' outline-none w-80 h-9 mt-[30px] relative left-[19%] bg-gray-200 rounded-[7px]'}
                        id={'branch'}>
                    <option selected>Select The Branch</option>
                    <option>Panadura</option>
                    <option>Galle</option>
                </select>

                <Input type={'username'} name={'username'} label={'username'} placeholder={''}/>
                <Input type={'password'} name={'password'} placeholder={''} label={'password'}/>
                <button className="min-btn relative left-[37%]  top-[2%]">Sing In</button>
                <span className={'relative left-[100px] top-[30px]'}>Don You Have An Account ?
                    <Link to={"/admin-sing-up"}>
                            <span className={'absolute right-[-32%] top-0 text-blue-700'}>Sing Up</span>
                    </Link>
                </span>
            </div>
        </div>
    </section>
}

export default AdminSingIn;