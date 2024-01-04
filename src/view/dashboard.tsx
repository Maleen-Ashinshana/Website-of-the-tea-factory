import logOut from "../assets/images/logout.png";
import fertilizer from "../assets/images/download__13_-removebg-preview.png";
import teaLeves from "../assets/images/download__14_-removebg-preview.png";
import dashBoard from "../assets/images/dashboard-32.png";
import teaItem from "../assets/images/download__11_-removebg-preview (1).png";
import Earl_GreyS from "../assets/images/collection1.2.jpg";
import whiteTea from "../assets/images/White-Tea_1.jpg";
import green_Tea from "../assets/images/collection1.4.jpg";
import all from "../assets/images/collection1.1-_1_.jpg";
import OlongTea from "../assets/images/collection1.7.jpg";
import DashBoardCard from "../component/card/dashBoardCard.tsx";


function Dashboard() {
    return <section className={'w-full h-full'}>
        <nav
            className={'flex justify-between items-center w-[82%] h-16 right-0 font-bold fixed  text-black z-[1000]'}

        >
            {/*<img src={logo} className={'w-36 relative '}/>*/}
            <h1 className={'font-serif text-3xl'}>Evergreen</h1>
            <ul className={'flex relative right-[10%] text-[20px] gap-[4vw]'}>
                {/* <li>Home</li>
                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>*/}

                <li className={'relative left-[130px]'}>log out</li>
                <li><img src={logOut} className={'w-8 relative left-[100px]'}/></li>
            </ul>
        </nav>
        <div className={'w-[18%] h-screen bg-[#16B757]'}>
            <div className={'w-full h-[8.5%] bg-[#037616]'}>
                <p className={'text-white font-mono text-[30px] font-bold flex items-center justify-center'}>Admin</p>
            </div>
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] '}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={dashBoard} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Dash Board</p>
            </div>
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] '}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={teaLeves} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Tea Levers</p>
            </div>
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] '}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={fertilizer} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Tea Fertilizer</p>
            </div>
            <div className={'w-full h-[7%] {/*border-2 border-black*/} mt-3 hover:bg-[#20c763] '}>
                <div className={'w-[25%] h-full {/*border-2 border-blue-500*/} ml-2'}>
                    <img src={teaItem} className={'w-12 relative left-[10%]'}/>
                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Tea Item</p>
            </div>
        </div>
        <div className={'w-[82%] h-[92%] bg-[#f0f0f0] absolute right-0 top-[8%]'}>

            <label
                className={'/*border-2 border-black*/ w-[170px] inline-block text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 absolute right-[17%] mt-5'}>Date
                : <p className={'inline-block'}>2024/2/2</p></label>
            <label className={'{/*border-2 border-black*/} w-[200px] inline-block text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 absolute right-0 mt-5'}>Time
                : <p className={'inline-block'}>15.30pm</p></label>
     {/*       <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
  Your text goes here
</span>*/}
<DashBoardCard itemName={'Green Tea'} qty={10} imgSrc={green_Tea}/>
<DashBoardCard itemName={'Black Tea'} qty={10} imgSrc={all}/>
<DashBoardCard itemName={'White Tea'} qty={10} imgSrc={whiteTea}/>
<DashBoardCard itemName={'Oloong Tea'} qty={10} imgSrc={OlongTea}/>
<DashBoardCard itemName={'Early Tea'} qty={10} imgSrc={Earl_GreyS}/>
<DashBoardCard itemName={'Green Tea'} qty={10} imgSrc={green_Tea}/>

        </div>
    </section>
}

export default Dashboard;