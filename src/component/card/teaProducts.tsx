interface Props {
    image: string,
    title: string,
    price: number


}

function TeaProducts(props: Props) {
    return <div
        className={'w-[280px] h-[300px]  {/*border-2 border-blue-500*/} mt-5 ml-5 inline-block hover:shadow-2xl'}>
        <div className={'w-full h-[80%] {/*border-2 border-black*/} bg-gray-200 '}>
            <div
                className={'w-[80%] h-[80%] /*border-2 border-orange-500*/ relative left-0 right-0 top-[20px] bottom-0 m-auto'}>
                {/*<img src={blackPeral} className={'w-full h-full '}/>*/}
                <img src={props.image} className={'w-full h-full '}/>
            </div>

        </div>
        {/* <p className={'font-bold flex items-center justify-center text-[18px]'}>Black Pearl</p>*/}
        <p className={'font-bold flex items-center justify-center text-[18px]'}>{props.title}</p>
        <p className={'font-bold flex items-center justify-center text-[18px]'}>price :
            <span className={'font-mono text-[#9baa71]'}> RS.
                           <span>{props.price}</span>
                       </span>
        </p>

    </div>

}

export default TeaProducts;