import logOut from "../assets/images/logout.png";

function Dashboard(){
    return <section className={'w-full h-full'}>
        <nav
            className={'flex justify-between items-center w-[82%] h-16 right-0 font-bold fixed  text-black z-[1000] border-2 border-black'}

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
            <div className={'w-full h-[7%] border-2 border-black mt-2 hover:bg-[#20c763] '}>
                <div className={'w-[25%] h-full border-2 border-blue-500 ml-2'}>

                </div>
                <p className={'relative bottom-[82%] left-[35%] text-white text-[20px] '}>Dash Board</p>
            </div>

        </div>
    </section>
}
export default Dashboard;