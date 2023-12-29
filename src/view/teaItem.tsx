// TeaItem.tsx


import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import searchIcon from "../assets/images/magnifying-glass.png";

interface TeaDetailsProps {
    image: string;
    title: string;
    price: number;
}

function TeaItem(props: TeaDetailsProps) {
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
    useEffect(() => {
        // Log details to the console
        console.log('TeaItem details:', {
            image: props.image,
            title: props.title,
            price: props.price,
        });

        // If you want to maintain an array of details, you can do it here
        // For example, you can dispatch an action to update the state in a Redux store
        // Or you can call a function in the parent component to update a state variable
    }, [props]);

    return <section className={'w-full h-screen bg-white'}>
        <nav
            className={'flex justify-between items-center w-full h-16 font-bold fixed  text-black z-[1000]   '}
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
        <div className={'w-full h-[91%] bg-white absolute top-[9%] border-2 border-black'}>
            {/*image eka load Wenna*/}
            <div className={'w-[400px] h-[300px] border-2 border-blue-500 m-5 '}>
            </div>

            {/*item Ekata adala Nama ha price ekata*/}
            <div className={'w-[300px] h-[100px] absolute top-0 left-[28%] m-5'}>
                <p className={'font-bold text-[20px]'}>Name :</p>
                <p className={'font-bold text-[20px] mt-5'}>Price :

                </p>

            </div>
            <div className={'w-[400px] h-[200px] absolute top-[18%] left-[29%] '}>
                <p className={'border-2 border-b-black border-t-white border-l-white border-r-white w-[50px] m-3'}>SIZE</p>
                <button className={'gram-btn'}>50G</button>
                <button className={'gram-btn'}>100G</button>
                <button className={'gram-btn'}>250G</button>
                <button className={'gram-btn'}>500G</button>
                <div className={'w-full h-24 border-2 border-white mt-2'}>
                    <div className={'w-24 h-20 border-[3px] border-black m-2'}>
                        <button className={'w-[50%] h-[50%] border-[1px] border-s-black border-b-black relative left-[46px] font-bold text-[20px] text-center'}>+</button>
                        <button className={'w-[50%] h-[50%] border-[1px] border-s-black border-b-black relative left-0 top-[50%] font-bold text-[20px] text-center'}>-</button>
                        {/*<div className={'w-[50%] h-[50%] border-2 border-fuchsia-200 relative left-[48px]'}>

                        </div>*/}

                    </div>
                    <button className={'w-[40%] h-10 bg-[#98a86d] relative bottom-[100%] left-[45%] text-white hover:bg-black'}>Add To Cart</button>
                    <button className={'w-[60%] h-10 bg-black relative bottom-[45%] right-[5%] text-white hover:bg-[#98a86d]'}>BY IT NOW</button>
                </div>
            </div>


        </div>
    </section>;
}

export default TeaItem;
