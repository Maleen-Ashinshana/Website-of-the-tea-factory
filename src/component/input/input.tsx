interface Props{
    type:string,
    name:string,
    placeholder ? :string,
    label ?:string,
    className ?: string
}
function Input(props: Props) {
    return<div className={''}>
        <label htmlFor={props.name}   className={" after:content[''] block text-black  text-italic relative top-[60px] left-[60px] text-opacity-100 "}>{props.label}</label>
        {/*<input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className} />*/}
        <input type={props.type} id={props.name} placeholder={props.placeholder} className={' after:content[\'\'] bg-gray-200 rounded-[50px]  focus:outline-none focus:border-gray-300 focus:ring-gray-300  focus:ring-1 w-80 h-9 mt-[30px] flex left-0 right-0 top-0 bottom-0 m-auto relative placeholder:italic placeholder:placeholder-left '}/>
    </div>

}
export default Input