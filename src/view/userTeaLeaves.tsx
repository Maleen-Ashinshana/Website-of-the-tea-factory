 import logo from "../assets/images/Evergreen_Logo_Primary_Full_4Col.png"
import logOut from "../assets/images/download (7).png";
 function UserTeaLeaves(){
    return<section className={'bg-white w-full h-screen'}>
        <header>
            <nav className={' flex justify-between items-center bg-gray-400 w-full h-12 font-bold'}>
               <img src={logo} className={'w-36 relative '}/>
                <ul className={'flex gap-[4vw]'}>
                  <li>Home</li>
                    <details className="dropdown">
                        <summary className="m-1 btn relative top-[-5px]">open or close</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 relative left-[100px]">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </details>
                    <img src={logOut} className={'w-[30px] relative left-[45px]'}/>
                    <li className={'relative right-[10px]'}>Log Out</li>
                </ul>
            </nav>
        </header>
    </section>

}
export default UserTeaLeaves;