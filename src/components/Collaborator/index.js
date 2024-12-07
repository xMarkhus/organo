import { AiFillCloseCircle } from "react-icons/ai";
import "./Collaborator.css"

const Collaborator = (props) => {
    const cssBackgroundColor = {backgroundColor: props.backgroundColor}

    return (
        <div className="collaborator">
            <AiFillCloseCircle size={25} className="delete" onClick={props.whenDelete} />
            <div className="header" style={cssBackgroundColor}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
            </div>
        </div>
    )
}

export default Collaborator