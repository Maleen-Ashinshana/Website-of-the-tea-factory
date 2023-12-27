import {Link} from "react-router-dom";
import searchIcon from "../assets/images/magnifying-glass.png";


function TeaProduct() {


    return <section className={'w-full h-screen'}>
        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-black z-[1000]  '}
            /*style={navbarStyle}*/
        >
            {/*<img src={logo} className={'w-36 relative '}/>*/}
            <h1 className={'font-serif text-3xl'}>Evergreen</h1>
            <ul className={'flex relative left-[15%]  text-[20px] gap-[4vw]'}>
                <li>Home</li>
                <li>
                    <Link to="/teaProduct">Product</Link>
                </li>

            </ul>
            <div className={'w-[400px] h-13  relative right-[100px]  '}>
                <input type={"search"} name={'search'} placeholder={'Search Tea Products!...'}
                       className={'outline-none border-[1px] border-black w-full h-[35px] text-[18px] rounded-[50px] text-center font-mohave bg-white relative top-[0px]'}/>
            </div>
            <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[18px]'}/>
        </nav>
        <div className={'w-full h-[90%]  absolute top-[62px] bg-[#DCDCDC] opacity-50'}>
            <p className={'text-[50px] flex items-center justify-center relative top-[140px] text-black opacity-100'}>Products</p>
            <div className={' w-[60%] h-[40%] border-2 border-blue-500 absolute left-0 right-0 top-0 bottom-0 m-auto'}>
                <button className={'text-[50px] relative top-[30%]'}>{'<'}</button>

                <button className={'text-[50px] relative left-[92%] top-[30%]'}>{'>'}</button>
            </div>
        </div>


    </section>

}

export default TeaProduct;