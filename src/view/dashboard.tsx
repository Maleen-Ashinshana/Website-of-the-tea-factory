import logOut from "../assets/images/logout.png";
import fertilizer from "../assets/images/download__13_-removebg-preview.png";
import teaLeves from "../assets/images/download__14_-removebg-preview.png";
import dashBoard from "../assets/images/dashboard-32.png";
import teaItem from "../assets/images/download__11_-removebg-preview (1).png";
import orderIcon from "../assets/images/shopping-bag.png";
import customer from "../assets/images/download__5_-removebg-preview.png";
import owner from "../assets/images/download__11_-removebg-preview.png";
/*import Earl_GreyS from "../assets/images/collection1.2.jpg";
import whiteTea from "../assets/images/White-Tea_1.jpg";
import green_Tea from "../assets/images/collection1.4.jpg";
import all from "../assets/images/collection1.1-_1_.jpg";
import OlongTea from "../assets/images/collection1.7.jpg";
import Matcha from "../assets/images/collection1.5.jpg";
import DashBoardCard from "../component/card/dashBoardCard.tsx";*/

import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import {Bar} from "react-chartjs-2";
/*import _default from "chart.js/dist/plugins/plugin.legend";*/

/*import defaultCallbacks from "chart.js/dist/plugins/plugin.tooltip";*/



function Dashboard() {
    ChartJs.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )
   const data={
       labels:['Jun','feb','mar','api','may','jun','jul','aug','sep','otc','nov','dec'],
       datasets:[
           {
               label:'Green Tea ',
               data:[3,6,9],
               backgroundColor:'green',
               boarderColor:'black',
               boarderWidth:1,
               left:'500px'
           },
           {
               label:'Black Tea',
               data:[3,6,9],
               backgroundColor:'black',
               boarderColor:'black',
               boarderWidth:1,
           },
           {
               label:'White Tea',
               data:[3,6,9],
               backgroundColor:'#cfcfcf',
               boarderColor:'black',
               boarderWidth:1,
           },
           {
               label:'Oloong Tea',
               data:[3,6,9],
               backgroundColor:'orange',
               boarderColor:'black',
               boarderWidth:1,
           },
           {
               label:'Early Tea',
               data:[3,6,9],
               backgroundColor:'#b32222',
               boarderColor:'black',
               boarderWidth:1,
           },
           {
               label:'Matcha Tea',
               data:[5,10,15],
               backgroundColor:'#98e86e',
               boarderColor:'black',
               boarderWidth:1,
           }

       ]
   }
   const  option={

   }


    return <section className={'w-full h-full'}>
        <div className={'w-full h-14 bg-white'}>
            <p className={'flex items-center justify-center font-bold text-[30px] relative top-[8px] '}>Admin Dash Board</p>

        </div>
       {/* <nav
            className={'flex justify-between items-center w-[82%] h-16 right-0 font-bold fixed text-black z-[1000]'}

        >
            <img src={logo} className={'w-36 relative '}/>
            <h1 className={'font-serif text-3xl pl-4'}>Evergreen</h1>
            <ul className={'flex relative right-[10%] text-[20px] gap-[4vw]'}>
                 <li>Home</li>
                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>

                <li className={'relative left-[130px]'}>log out</li>
                <li><img src={logOut} className={'w-8 relative left-[100px]'}/></li>
            </ul>
        </nav>*/}
        <div className={'w-[18%] h-screen bg-[#16B757] fixed'}>
           {/* <div className={'w-full h-[8.5%] bg-[#037616]'}>
                <p className={'text-white font-mono text-[30px] font-bold flex items-center justify-center'}>Admin</p>
            </div>*/}
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
            <div className={'w-full h-[7%] mt-3 hover:bg-[#20c763] absolute bottom-[8%]'}>
                <div>
                    <img src={logOut} className={'w-6 relative left-[20px] top-[15px]'}/>
                </div>
                <p className={'relative bottom-[30%] left-[30%] text-black text-[20px] '}>Log Out</p>

            </div>
            {/*<li className={'relative left-[130px]'}>log out</li>
            <li><img src={logOut} className={'w-8 relative left-[100px]'}/></li>*/}
        </div>
        <div className={'w-[82%] h-[92%] bg-[#f0f0f0] absolute right-0 top-[8%]'}>

            <label
                className={'/*border-2 border-black*/ w-[170px] inline-block text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 absolute right-[17%] mt-5'}>Date
                : <p className={'inline-block'}>2024/2/2</p></label>
            <label
                className={'{/*border-2 border-black*/} w-[200px] inline-block text-[20px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 absolute right-0 mt-5'}>Time
                : <p className={'inline-block'}>15.30pm</p></label>

            <div className={'bg-white w-[25%] h-[20%] absolute top-[15%] ml-10 rounded-[10px] shadow-2xl'}>
                <img src={orderIcon} className={'w-16 absolute left-5 top-0 bottom-0 m-auto '}/>
                <p className={'text-[18px] absolute left-[130px] top-[20%] text-gray-400'}>Orders</p>
                <label className={'font-bold text-[28px] absolute right-[120px] bottom-[40px]'}>1,000</label>
            </div>
            <div className={'bg-white w-[25%] h-[20%] absolute top-[15%] left-[30%] ml-10 rounded-[10px] shadow-2xl inline-block'}>
                <img src={customer} className={'w-16 absolute left-5 top-0 bottom-0 m-auto '}/>
                <p className={'text-[18px] absolute left-[130px] top-[20%] text-gray-400'}>Customers</p>
                <label className={'font-bold text-[28px] absolute right-[120px] bottom-[40px]'}>1,000</label>
            </div>
            <div className={'bg-white w-[25%] h-[20%] absolute top-[15%] right-[12%]  ml-10 rounded-[10px] shadow-2xl'}>
                <img src={owner} className={'w-16 absolute left-5 top-0 bottom-0 m-auto '}/>
                <p className={'text-[18px] absolute left-[130px] top-[20%] text-gray-400'}>Tea Owners</p>
                <label className={'font-bold text-[28px] absolute right-[120px] bottom-[40px]'}>1,000</label>
            </div>
            {/*       <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
  Your text goes here
</span>*/}
          {/*  <DashBoardCard itemName={'Green Tea'} qty={10} imgSrc={green_Tea}/>
            <DashBoardCard itemName={'Black Tea'} qty={10} imgSrc={all}/>
            <DashBoardCard itemName={'White Tea'} qty={10} imgSrc={whiteTea}/>
            <DashBoardCard itemName={'Oloong Tea'} qty={10} imgSrc={OlongTea}/>
            <DashBoardCard itemName={'Early Tea'} qty={10} imgSrc={Earl_GreyS}/>
            <DashBoardCard itemName={'Matcha Tea'} qty={10} imgSrc={Matcha}/>*/}
            {/*<div className={'w-[95%] h-[13%] bg-white relative top-[10%] left-[40px] rounded-t-[10px]'}>
                <p className={'flex items-center justify-center text-[30px] font-bold relative top-[20px]'}>Order Chart</p>

            </div>*/}

            <div className={'w-[95%] h-[50%] bg-white relative top-[47%] left-[40px] rounded-[10px] shadow-2xl'}>
                <p className={'flex items-center justify-center text-[30px] font-bold'}>Order Chart</p>
                <Bar width={1500}
                     height={370}
                     data={data}
                     options={option}
                     style={{
                         width:'95%',
                         height:'30%',
                         position:'relative',
                         top:'5px'
                     }}
                   />
            </div>
        </div>
    </section>
}

export default Dashboard;