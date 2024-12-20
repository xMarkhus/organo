import "./TextField.css"

const TextField = (props) => {

    const whenTyping = (event) => {
        props.whenChanging(event.target.value)
    }

    return (
        <div className={`field__writing field__${props.type}`}>
            <label>{props.label}</label>
            <input
                type={props.type}
                value={props.value}
                onChange={whenTyping}
                required={props.required}
                placeholder={props.placeholder} />
        </div>
    )
};

export default TextField;
