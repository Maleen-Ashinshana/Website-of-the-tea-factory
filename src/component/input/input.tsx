interface Props{
    type:string,
    name:string,
    placeholder ? :string,
    label ?:string,
    className ?: string
}
function Input(props: Props) {
    return<div className={''}>
        <label htmlFor={props.name} className={"block"}></label>
        {/*<input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className} />*/}
        <input type={props.type} id={props.name} placeholder={props.placeholder} className={'border-2 border-black outline-none w-60 h-8 mt-[30px] flex left-0 right-0 top-0 bottom-0 m-auto'}/>
    </div>

}
export default Input