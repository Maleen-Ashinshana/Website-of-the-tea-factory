import {Link} from "react-router-dom";
import searchIcon from "../assets/images/magnifying-glass.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import all from "../assets/images/collection1.1-_1_.jpg";
import Earl_GreyS from "../assets/images/collection1.2.jpg";
import whiteTea from "../assets/images/White-Tea_1.jpg";
import green_Tea from "../assets/images/collection1.4.jpg";
import Matcha from "../assets/images/collection1.5.jpg";
import Sencha from "../assets/images/collection1.6.jpg";
import OlongTea from "../assets/images/collection1.7.jpg";
import blackPeral from "../assets/images/blackTea/110269-removebg-preview.png";
import {useEffect, useState} from "react";


function TeaProduct() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: isScrolled ? 'rgba(164, 162, 162, 0.25)' : 'transparent',
        transition: 'background-color 0.3s ease', // Optional: Add a smooth transition effect
    };
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const [isEarlDivVisible, setIsEarlDivVisible] = useState(false);

    // Function to handle the click event and set isEarlDivVisible to true
    const handleEarlDiv = () => {
        setIsEarlDivVisible(true);
    };


    return <section className={'w-full h-screen'}>
        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-black z-[1000]  '}
            style={navbarStyle}
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
                       className={'outline-none border-[1px] border-black w-full h-[35px] text-[18px] rounded-[50px] text-center font-mohave bg-transparent relative top-[0px]'}/>
            </div>
            <img src={searchIcon} className={'w-[30px] absolute right-[55px] top-[18px]'}/>
        </nav>
        <div className={'w-full h-[80%]  absolute top-[62px] bg-[#DCDCDC] bg-opacity-50'}>
            <p className={'text-[50px] flex items-center justify-center relative top-[140px] text-black opacity-100'}>Products</p>
            <div
                className={' w-[60%] h-[40%]  absolute left-0 right-0 top-0 bottom-0 m-auto /*border-2 border-orange-500*/'}>

                <Carousel responsive={responsive}
                          className={'absolute left-0 right-0 top-[10px] bottom-[0%] m-auto opacity-100 /*border-2 border-fuchsia-200*/ w-full'}>
                    <div className={' h-[200px] {/*border-2 border-blue-500*/} w-40 relative '}>
                        <img src={all}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={' absolute left-[30%] bottom-0'}>Black Tea</p>
                    </div>
                    <div className={' {/*border-2 border-black*/} h-[200px] w-40 relative left-[-35%]'}>
                        <img src={Earl_GreyS}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}
                             onClick={handleEarlDiv}/>
                        <p className={'absolute left-[25%] bottom-0'}>EARL GREYS</p>
                    </div>
                    {/*<div className={' h-[200px] border-2 border-green-400 w-40 relative left-[-75%]'}>
                        <img src={masalaChai}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[23%] bottom-0'}>MASALA CHAI</p>
                    </div>*/}
                    <div className={' h-[200px] {/*border-2 border-red-400*/} w-40  relative left-[-75%]'}>
                        <img src={green_Tea}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[25%] bottom-0'}>GREEN TEA</p>
                    </div>
                    <div className={' h-[200px] {/*border-2 border-sky-500*/} w-40    relative left-[-115%]'}>
                        <img src={Matcha}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[35%] bottom-0'}>MATCHA</p>
                    </div>
                    <div className={' h-[200px] {/*border-2 border-y-amber-500*/} w-40  relative left-[-155%]'}>
                        <img src={Sencha}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[40%] bottom-0'}>SENCHA</p>
                    </div>
                    <div className={' h-[200px] {/*border-2 border-orange-500*/} w-40   relative left-[-195%]'}>
                        <img src={OlongTea}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[22%] bottom-0'}>OOLONG TEA</p>
                    </div>
                    <div className={' h-[200px] {/*border-2 border-orange-500*/} w-40   relative left-[-240%]'}>
                        <img src={whiteTea}
                             className={'absolute left-0 right-0 top-0 bottom-0 m-auto w-32 h-32 rounded-[100px] hover:border-[5px] hover:border-[#9baa71]'}/>
                        <p className={'absolute left-[30%] bottom-0'}>White TEA</p>
                    </div>
                </Carousel>


                {/*<button className={'text-[50px] relative top-[30%]'}>{'<'}</button>*/}

                {/*<button className={'text-[50px] relative left-[92%] top-[30%]'}>{'>'}</button>*/}
            </div>
        </div>

        <div className={'w-full h-[80%] bg-white absolute bottom-[-68%]'}>
            <h1 className={'flex items-center justify-center relative top-12 text-[25px]'}>All Items</h1>

            <div className={'w-full h-screen border-2 border-black relative top-12 '}>
                <div className={'w-[280px] h-[300px]  {/*border-2 border-blue-500*/} mt-5 ml-5 inline-block hover:shadow-2xl'}>
                    <div className={'w-full h-[80%] {/*border-2 border-black*/} bg-gray-200 '}>
                        <div
                            className={'w-[80%] h-[80%] /*border-2 border-orange-500*/ relative left-0 right-0 top-[20px] bottom-0 m-auto'}>
                            <img src={blackPeral} className={'w-full h-full '}/>
                        </div>

                    </div>
                   <p className={'font-bold flex items-center justify-center text-[18px]'}>Black Pearl</p>
                   <p className={'font-bold flex items-center justify-center text-[18px]'}>price :
                       <span className={'font-mono text-[#9baa71]'}> RS.
                           <span>180</span>
                       </span>
                   </p>

                </div>
                {/*<div className={'w-[280px] h-[300px]  border-2 border-blue-500 mt-5 ml-5 inline-block'}>

                </div>
                <div className={'w-[280px] h-[300px]  border-2 border-blue-500 mt-5 ml-5 inline-block'}>

                </div>
                <div className={'w-[280px] h-[300px]  border-2 border-blue-500 mt-5 ml-5 inline-block'}>

                </div>
                <div className={'w-[280px] h-[300px]  border-2 border-blue-500 mt-5 ml-5 inline-block'}>

                </div>
                <div className={'w-[280px] h-[300px]  border-2 border-blue-500 mt-5 ml-5 inline-block'}>

                </div>*/}

            </div>

        </div>
        {/*<div className={'w-full h-[80%] bg-green-600 hidden'} id={'earlDiv'}>

        </div>*/}
        {isEarlDivVisible && (
            <div className={'w-full h-[80%] bg-green-600'} id={'earlDiv'}>
                {/* Content of your earlDiv */}
            </div>
        )}


    </section>

}

export default TeaProduct;