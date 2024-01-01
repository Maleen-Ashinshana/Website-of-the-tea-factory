import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";
import mainVideo from "../assets/video/pexels-tin-nguyen-17973477 (2160p).mp4";

function Home(){
    return<section className={'w-full h-screen bg-white'}>
        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-black z-[1000] border-2 border-black  '}

            /*style={navbarStyle}*/
        >
            {/*<img src={logo} className={'w-36 relative '}/>*/}
            <img src={logo} className={'w-36 h-14'} title="logo" alt="logo"/>

            <ul className={'flex relative left-[15%]  text-[20px] gap-[4vw]'}>
                <li>Home</li>


            </ul>

        </nav>
        <div className={'w-full h-[91.3%] border-2 border-black bg-green-600 absolute top-16'}>
        <video src={mainVideo} width={'1500px'} height={'400px'} controls/>
        </div>



    </section>

}
export default Home;