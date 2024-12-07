import "./TextField.css"

const TextField = (props) => {

    const whenTyping = (event) => {
        props.whenChanging(event.target.value)
    }

    return (
        <div className="field__writing">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyping} required={props.required} placeholder={props.placeholder} />
        </div>
    )
};

export default TextField;
