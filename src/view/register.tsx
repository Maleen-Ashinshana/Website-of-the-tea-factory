
import usernameIMG from "../assets/images/download__13_-removebg-preview.png";
import passwordIMG from "../assets/images/download__14_-removebg-preview.png";
import Email from "../assets/images/email.png";

function Register() {
 /*   const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };*/


    return <section className={'w-full h-screen  bg-gray-300 '}>
        <div className={'w-[50%] h-24 absolute left-0 right-0  top-[30px] m-auto'}>
            <h1 className={' text-[50px] font-bold font-Helvetica flex items-center justify-center text-[#98A86D]'}>Welcome To Evergreen</h1>
            <div className={'w-full h-[1px] bg-[#761D1E]'}></div>

        </div>
        <div
            className={'w-[40%] h-[60%] bg-white absolute top-0 bottom-0 m-auto left-[30px] rounded-[10px] shadow-2xl'}>
            <h1 className={'text-gray-300 text-[40px] font-bold flex items-center justify-center relative top-[30px] font-sans'}>Sing
                In</h1>
            <div className={'w-[70%] h-[50%] absolute left-0 right-0 top-0 bottom-0 m-auto'}>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter Your User Name"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0  `}

                />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8  `}
                />

                <button className={'w-full h-[25%] bg-black text-white absolute bottom-[10%] left-0 text-[20px] hover:bg-[#98A86D]'}>Sing In</button>
            </div>
                <img src={usernameIMG} className={'w-10 relative top-[12%] left-[6%]'}/>
                <img src={passwordIMG} className={'w-10 relative top-[20%] left-[6%]'}/>
        </div>

        <div
            className={'w-[40%] h-[60%] bg-white absolute top-0 bottom-0 m-auto right-[30px] rounded-[10px] shadow-2xl'}>
            <h1 className={'text-gray-300 text-[40px] font-bold flex items-center justify-center relative top-[30px] font-sans'}>Sing
                Up</h1>
            <div className={'w-[70%] h-[60%] absolute left-0 right-0 top-[10%] bottom-0 m-auto'}>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter Your User Name"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0  `}

                />
                <input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8  `}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter Your Password"
                    className={`w-full h-[20%] border-[2px] border-gray-300 outline outline-0 focus:outline-0 mt-8  `}
                />


            </div>
            <img src={usernameIMG} className={'w-10 relative top-[12%] left-[6%]'}/>
            <img src={Email} className={'w-10 relative top-[23%] left-[6%]'}/>
            <img src={passwordIMG} className={'w-10 relative top-[34%] left-[6%]'}/>
            <button className={'w-[70%] h-[13%] bg-black text-white absolute bottom-[5%] left-0 right-0 m-auto text-[20px] hover:bg-[#98A86D]'}>Sing Up</button>
        </div>
        <div className={'w-[300px] h-16 absolute left-0 right-0  bottom-[5%] m-auto'}>
            <button className={'w-full h-full border-[2px] border-white-500 bg-transparent text-[20px] text-white hover:text-black hover:border-black'}>Back To Dash Board</button>

        </div>
    </section>
}

export default Register;