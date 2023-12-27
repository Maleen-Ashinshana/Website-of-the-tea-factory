import mainImage from "../assets/images/slide1.1.jpg";

import greenTea from "../assets/images/collection1.4.jpg";
import blackTea from "../assets/images/collection1.1-_1_.jpg";
import {useEffect, useState} from "react";


// import log from "../assets/images/TSP.png";
//
// const button=document.querySelector('button');
// // button.addEventListener('click', () => {
// //     // logic here
// //     return<img src={log}/>
// // })

function TeaOrder() {


    // const [showSeparateDiv, setShowSeparateDiv] = useState(false);
    //
    // const handleAdd1Click = () => {
    //     setShowSeparateDiv(true);
    // };

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
        backgroundColor: isScrolled ? '#a4a2a2' : 'transparent',

    };

    return <section className={'w-full h-screen'}>

            <nav
                className={'flex justify-between items-center w-full h-16 font-bold fixed top-0 left-0 right-0 text-white '}
                style={navbarStyle}
            >
                {/*<img src={logo} className={'w-36 relative '}/>*/}
                <h1 className={'font-serif text-3xl'}>Evergreen</h1>
                <ul className={'flex relative right-[10%] text-[20px] gap-[4vw]'}>
                    <li>Home</li>
                    <li>Product</li>
                </ul>
            </nav>


        <div className={'w-full h-full '}>
            <img src={mainImage} className={'w-full h-full'}/>



            <p className={'absolute top-[30%] left-[45%] text-white text-[20px] font-sans'}>HEALTH BENEFITS OF
                TEA</p>
            <p className={'absolute top-[33%] left-[43%] text-white text-[65px] font-serif'}>Evergreen</p>
            <p className={'absolute top-[43%] left-[43.5%] text-white text-[65px] font-serif'}>Sri Lanka</p>


            <button
                className={'w-36 h-10 border-2 border-white absolute bottom-[280px] left-[47.5%] text-white hover:bg-white hover:text-black'}>SHOP
                NOW
            </button>
        </div>
        <div className={'w-full h-screen '}>

            <div className={'w-[60%] h-[45%]  m-[20px] rounded-[10px] hover:shadow-2xl '}>
                <img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>
                <div className={'w-[56%] h-full bg-[#b7c499]  relative bottom-[100%] rounded-l-[10px]'}>
                    <p className={'text-white font-bold text-[35px] flex items-center justify-center'}>Green Tea</p>
                    <div className={'h-[82%] w-[95%]  relative left-[10px] '}>
                        <p className={'text-white relative left-[10px] text-[17px]'}>Green tea lovers raise your hands!
                            The many health benefits and most importantly its role in
                            aiding weight loss has made green tea one of the most popular beverages of the millennium.
                            While
                            the beverage is relatively new and just about picking up in India, green tea has been
                            consumed
                            in Japan and China for centuries.</p>
                        <button
                            className={'w-36 h-10 border-2 border-white bg-white flex items-center justify-center relative left-[30%] top-[20%] text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white'}>SHOP
                            NOW
                        </button>
                    </div>

                    {/*<img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>*/}
                </div>
            </div>
            <div className={'w-[60%] h-[45%]  m-[20px]  absolute right-0 rounded-[10px] hover:shadow-2xl'}>
                <img src={blackTea} className={'w-[400px] h-full relative left-[0%] rounded-l-[10px]'}/>
                <div className={'w-[56%] h-full bg-[#b7a790]  relative left-[43.9%] bottom-[100%] rounded-r-[10px]'}>
                    <p className={'text-white font-bold text-[35px] flex items-center justify-center'}>Black Tea</p>
                    <div className={'h-[82%] w-[95%]  relative left-[10px] '}>
                        <p className={'text-white relative left-[10px] text-[17px]'}>Black tea lovers raise your
                            hands!It has many health benefits and most importantly can improve heart health and has
                            antioxidant properties. Black Tea has been consumed in Sri Lanka for centuries, so this
                            drink is a famous drink among many countries.</p>
                        <button
                            className={'w-36 h-10 border-2 border-white bg-white flex items-center justify-center relative left-[35%] top-[20%] text-black hover:bg-transparent hover:text-white hover:border-2 hover:border-white'}>SHOP
                            NOW
                        </button>
                    </div>

                    {/*<img src={greenTea} className={'w-[400px] h-full relative left-[56%] rounded-r-[10px]'}/>*/}
                </div>

            </div>

        </div>

        {/*<div className={'w-full h-full bg-green-600'}>*/}
        {/*    <button className={'w-28 h-16 bg-gray-600 relative m-5'} >Add1</button>*/}
        {/*    <button className={'w-28 h-16 bg-gray-600 relative m-5'}>Add2</button>*/}


        {/*</div>*/}
        {/*<div className={'w-full h-full bg-green-600'}>*/}
        {/*    <button*/}
        {/*        className={'w-28 h-16 bg-gray-600 relative m-5'}*/}
        {/*        onClick={handleAdd1Click}*/}
        {/*    >*/}
        {/*        Add1*/}
        {/*    </button>*/}
        {/*    /!* Additional div to be displayed when Add1 button is clicked *!/*/}
        {/*    {showSeparateDiv && (*/}
        {/*        <div className={'w-64 h-32 bg-blue-400 absolute top-20 left-20'}>*/}
        {/*            /!* Add content for the separate div here *!/*/}
        {/*            This is the separate div content.*/}
        {/*        </div>*/}
        {/*    )}*/}
        {/*</div>*/}


    </section>


}

export default TeaOrder;