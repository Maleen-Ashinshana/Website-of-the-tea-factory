import Logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import CustomInput from "../component/input/customInput.tsx";

function AdminSingUp() {
    return <section className={'bg-gray-200 w-full h-screen'}>
        <img src={Logo} className={'w-56 p-2'}/>
        <p className={'text-5xl font-bold font-inter absolute left-[32%] p-7 text-gray-400 top-[25px]'}>Welcome To
            Evergreen</p>
        <div
            className={'bg-white w-[50%] h-[70%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl   drop-shadow-2xl '}>
            <CustomInput type={'username'} name={'username'} label={'username : '} placeholder={'Enter Your User Name'}
                         className={'bg-gray-200  w-80 h-10 relative left-[35%] mt-[30px] top-[70px] rounded-[3px] outline-none border focus:border-gray-500'}/>
            <CustomInput type={'email'} name={'email'} label={'email : '} placeholder={'Enter Your Email'}
                         className={'bg-gray-200  w-80 h-10 flex  relative left-[35%] mt-[30px] top-[70px] rounded-[3px] outline-none border focus:border-gray-500'}/>
            <CustomInput type={'password'} name={'password'} label={'password : '} placeholder={'Enter Your Password'}
                         className={'bg-gray-200  w-80 h-10 flex   relative left-[35%] mt-[30px] top-[70px] rounded-[3px] outline-none border focus:border-gray-500'}/>

            <button className={'min-btn  left-[43%] top-[20%]'}>Sing Up</button>
        </div>
    </section>
}

export default AdminSingUp;