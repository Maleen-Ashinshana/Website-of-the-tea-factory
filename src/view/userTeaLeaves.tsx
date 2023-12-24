 import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import logOut from "../assets/images/download (7).png";
import addPng from "../assets/images/download__10_-removebg-preview.png";
 function UserTeaLeaves(){
    return<section className={'bg-white w-full h-screen'}>
        <header>
            <nav className={' flex justify-between items-center bg-gray-400 w-full h-12 font-bold'}>
               <img src={logo} className={'w-36 relative '}/>
                <ul className={'flex gap-[4vw]'}>
                  <li>Home</li>
                  <li>Ordering Tea Powder</li>
                  <li>Ordering Tea Fertilizer</li>

                    <img src={logOut} className={'w-[30px] relative left-[45px]'}/>
                    <li className={'relative right-[10px]'}>Log Out</li>
                </ul>
            </nav>
        </header>

        <div className={'w-full h-[93.5%] border-2 border-gray-600 '}>
            <div className={' w-[30%] h-[15%] '}>
                <p className={'relative m-[10px]'}>UserName :
                    <label className={'font-bold '}>Maleen</label>
                </p>

                <p className={'relative m-[10px]'}>Price of 1kg of normal tea leaves :
                    <label className={'font-bold '}>RS.200</label>
                </p>

                <p className={'relative m-[10px]'}>Price of 1kg of Super tea leaves :
                    <label className={'font-bold '}>RS.250</label>
                </p>
            </div>

            <div  className={' w-40 h-36 absolute right-[10px] top-[100px] font-bold text-[20px] text-white'}>
                <button className={'w-full h-[35%] bg-red-600 rounded-[10px]'}>Fertilize</button>
                <img src={addPng} className={'w-[25px] h-[25px] relative bottom-[38px]'} />
                <button className={'w-full h-[35%] bg-green-600 rounded-[10px]'}>   Tea Powder</button>
                <img src={addPng} className={'w-[25px] h-[25px] relative bottom-[38px]'} />
            </div>
            <h1 className={'relative left-[200px] top-[50px] font-bold text-[30px]'}>Tea Leaves</h1>


        </div>
    </section>

}
export default UserTeaLeaves;