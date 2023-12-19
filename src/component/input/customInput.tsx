interface Props{
    type:string,
    name:string,
    placeholder ? :string,
    label ?:string,
    className ?: string
}
function CustomInput(props: Props) {
    return<div>
        <label htmlFor={props.name} className={"block"}></label>
        {/*<input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className} />*/}
        <input type={props.type} id={props.name} placeholder={props.placeholder} className={props.className}/>
    </div>

}
export default CustomInput;