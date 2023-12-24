 import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import logOut from "../assets/images/download (7).png";
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

        <div className={'bg-amber-400 w-full h-[93.5%] '}>

        </div>
    </section>

}
export default UserTeaLeaves;