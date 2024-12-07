import "./SuspendedList.css"

const SuspendedList = (props) => {
    return (
        <div className="times__options">
            <label>{props.label}</label>
            <select
                onChange={event => props.whenChanging(event.target.value)}
                required={props.required}
                value={props.value}
            >
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default SuspendedList
