import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png";
import {Link} from "react-router-dom";
import logOut from "../assets/images/download (7).png";
import SearchBar from "../component/input/searchBar.tsx";
import searchIcon from "../assets/images/magnifying-glass.png";

interface Data{
    id:number,
    date:string
    fertilize_type:string,
    qty:number,
    price:number
}
const data:Data[]=[
    {
        id:1,
        date:"2023-1-2",
        fertilize_type:"super",
        qty:25,
        price:1300
    },
    {
        id:2,
        date:"2023-1-5",
        fertilize_type:"normal",
        qty:15,
        price:900
    },
    {
        id:3,
        date:"2023-2-2",
        fertilize_type:"super",
        qty:38,
        price:1500
    },
    {
        id:4,
        date:"2023-3-2",
        fertilize_type:"super",
        qty:18,
        price:500
    },
    {
        id:5,
        date:"2023-2-2",
        fertilize_type:"super",
        qty:38,
        price:1500
    },
    {
        id:6,
        date:"2023-2-2",
        fertilize_type:"super",
        qty:38,
        price:1500
    },
    {
        id:3,
        date:"2023-2-2",
        fertilize_type:"super",
        qty:38,
        price:1500
    }
]
function OrderingTeaFertilizer(){
    return<section className={'bg-white w-full h-screen'}>
        <header>
            <nav className={' flex justify-between items-center bg-gray-400 w-full h-12 font-bold'}>
                <img src={logo} className={'w-36 relative '}/>
                <ul className={'flex gap-[4vw]'}>
                    <Link to={"/user-tea-leaves"}>
                        <li>Home</li>
                    </Link>

                    <Link to={"/user-tea-powder"}>
                        <li>Ordering Tea Powder</li>
                    </Link>

                    <Link to={"/user-tea-fertilize"}>
                        <li>Ordering Tea Fertilizer</li>
                    </Link>


                    <img src={logOut} className={'w-[30px] relative left-[45px]'}/>
                    <Link to={"/user-sing-in"}>
                        <li className={'relative right-[10px]'}>Log Out</li>
                    </Link>
                </ul>
            </nav>
        </header>
        <div className={'w-full h-[93.5%] border-2   bg-[#ffffff]'}>
            <div className={' w-[30%] h-[18%] '}>
                <p className={'relative m-[10px]'}>UserName :
                    <label className={'font-bold '}>Maleen</label>
                </p>
                <p className={'font-bold m-[10px]'}>Types of tea Fertilize</p>
                <select className={'  outline-none m-[5px] w-80 h-9  bg-gray-200 rounded-[7px]'}
                        id={'owner_type'}>
                    <option>Price of 50kg of T 709 </option>
                </select>
                <label className={'font-bold relative left-[20px]'}>RS.8000</label>
                {/*<p className={'relative m-[10px]'}>Price of 1kg of normal tea leaves :*/}
                {/*    <label className={'font-bold '}>RS.200</label>*/}
                {/*</p>*/}

                {/*<p className={'relative m-[10px]'}>Price of 1kg of Super tea leaves :*/}
                {/*    <label className={'font-bold '}>RS.250</label>*/}
                {/*</p>*/}
            </div>
            <SearchBar type={'search'} name={'search'} placeholder={'Search day the tea powder was ordered...'}/>
            <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[70px]'}/>
            <h1 className={'relative left-[200px] top-[120px] font-bold text-[30px] w-[50%]'}>Tea Fertilize</h1>
            <div className={'w-[70%] h-[45%]  absolute left-0 right-0 top-[300px] bottom-0 m-auto'}>
                <table>
                    <thead className={'bg-[#dcdcdc]'}>
                    <tr>
                        <th className={'py-3'}>Date</th>
                        <th className={'py-3'}>Tea Fertilize Type</th>
                        <th className={'py-3'}>Qty</th>
                        <th className={'py-3'}>Price</th>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        data.map((r:Data)=>{
                            return<tr className={'border-b  '}>
                                <td className={'w-[10%] relative left-[100px]'}>{r.date}</td>
                                <td className={'w-[10%] relative left-[100px]'}>{r.fertilize_type}</td>
                                <td className={'w-[10%] relative left-[100px]'}>{r.qty}</td>
                                <td className={'w-[10%] relative left-[100px]'}>{r.price}</td>
                            </tr>
                        })

                    }

                    </tbody>
                </table>
            </div>

        </div>

    </section>

}
export default OrderingTeaFertilizer;