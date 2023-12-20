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
        <input type={props.type} id={props.name} placeholder={props.placeholder} className={' bg-gray-200 rounded-[50px]  outline-none w-80 h-9 mt-[30px] flex left-0 right-0 top-0 bottom-0 m-auto  contrast-more:border-slate-400 contrast-more:placeholder-slate-500'}/>
    </div>

}
export default Input