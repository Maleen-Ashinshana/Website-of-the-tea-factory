import mainImage from "../assets/images/slide1.1.jpg";


function TeaOrder() {
    return <section className={'w-full h-screen'}>
        <div className={'w-full h-full '}>
            <img src={mainImage} className={'w-full h-full'}/>
            <nav
                className={' flex justify-between items-center  w-full h-16 font-bold relative bottom-[100%] text-white '}>
                {/*<img src={logo} className={'w-36 relative '}/>*/}
                <h1 className={'font-serif text-3xl'}>Evergreen</h1>
                <ul className={' flex relative right-[10%] text-[20px] gap-[4vw]'}>
                    <li>Home</li>
                    <li>Product</li>
                </ul>
            </nav>
            <p className={'absolute top-[30%] left-[45%] text-white text-[20px] font-sans'}>HEALTH BENEFITS OF TEA</p>
            <p className={'absolute top-[33%] left-[43%] text-white text-[65px] font-serif'}>Evergreen</p>
            <p className={'absolute top-[43%] left-[43.5%] text-white text-[65px] font-serif'}>Sri Lanka</p>


            <button className={'w-36 h-10 border-2 border-white absolute bottom-[280px] left-[47.5%] text-white hover:bg-white hover:text-black'}>SHOP NOW</button>
        </div>

    </section>

}

export default TeaOrder;