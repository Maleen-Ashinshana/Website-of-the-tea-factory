import logo from '../assets/images/Evergreen_Logo_Primary_Full_4Col.png'
import Input from "../component/input/input.tsx";
import {Link} from "react-router-dom";
import usernameIMG from "../assets/images/download__13_-removebg-preview.png";
import passwordIMG from "../assets/images/download__14_-removebg-preview.png";


function AdminSingIn() {

    return <section className={'bg-gray-200 w-full h-screen'}>
        <div
            className={'bg-white w-4/5 h-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            {/*<p className={'text-5xl font-bold font-inter absolute left-[28%] p-7 text-gray-400 '}>Welcome To
                Evergreen</p>*/}
            <div className={' w-[25%] h-[12%] absolute left-[-5%] right-0 m-auto mt-2'}>
                <img src={logo} className={'w-full h-full'} title="logo" alt="logo"/>

            </div>
            <div className={'w-44 h-44 rounded-[100px] bg-gray-600 overflow-hidden absolute left-[-5%] '}></div>
            {/*<div className="w-20 h-10 bg-blue-500 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden flex">
                    <div className="w-1/2 h-full bg-white rounded-r-full"></div>
                </div>
            </div>*/}

           {/* <div className="relative w-44 h-44">
                <div className="absolute top-0 left-0 w-full h-22 rounded-t-[100px] bg-gray-600"></div>
                <div className="absolute bottom-0 left-0 w-full h-22 rounded-b-[100px] bg-blue-600"></div>
            </div>*/}
            {/*<div className={'w-40 h-full bg-green-600 rounded-[10px]  '}></div>*/}
            {/*<div className={'h-full bg-green-600 rounded-[10px] rotate-45 relative top-[60%] left-[-10%]'} style={{ clipPath: 'polygon(0 0, 10% 0, 30% 100%, 10% 100%)' }}></div>*/}

            <div className={' w-[42%] h-[80%] absolute left-0 right-0 top-0 bottom-0 m-auto'}>

                <p className={'font-bold text-[40px] flex items-center justify-center p-7 text-gray-400 relative top-[20px]'}>Sing
                    In</p>

                {/*<select className={'  outline-none w-80 h-9 mt-[30px] relative left-[19%] bg-gray-200 rounded-[7px]'}
                        id={'owner_type'}>
                    <option selected>Select Type</option>
                    <option>Admin</option>
                    <option>Branch Owner</option>
                </select>*/}
               {/* <select className={' outline-none w-80 h-9 mt-[30px] relative left-[19%] bg-gray-200 rounded-[7px]'}
                        id={'branch'}>
                    <option selected>Select The Branch</option>
                    <option>Panadura</option>
                    <option>Galle</option>
                </select>*/}
<img src={usernameIMG} className={'w-8 relative top-[12%] left-[10%] '}/>
<img src={passwordIMG} className={'w-8 relative top-[21%] left-[10%]'}/>
                <div className={'w-[80%] h-40 absolute left-0 right-0  top-[30%] m-auto'}>
                    <Input type={'username'} name={'username'} label={'username'} placeholder={''} />
                    <Input type={'password'} name={'password'} placeholder={''} label={'password'}/>
                </div>
                {/*<Input type={'username'} name={'username'} label={'username'} placeholder={''} />
                <Input type={'password'} name={'password'} placeholder={''} label={'password'}/>*/}
                <button className="min-btn absolute left-[37%]  bottom-[25%]">Sing In</button>
                <span className={'absolute left-[120px] bottom-[70px]'}>Don You Have An Account ?
                    <Link to={"/admin-sing-up"}>
                            <span className={'absolute right-[-32%] top-0 text-blue-700'}>Sing Up</span>
                    </Link>
                </span>
            </div>
        </div>
    </section>
}

export default AdminSingIn;