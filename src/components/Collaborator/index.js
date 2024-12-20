import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Collaborator.css"

const Collaborator = (props) => {
    const cssBackgroundColor = { backgroundColor: props.backgroundColor }

    function favorite() {
        props.whenFavorite(props.id)
    }

    return (
        <div className="collaborator">
            <AiFillCloseCircle
                size={25}
                className="delete"
                onClick={() => props.whenDelete(props.id)}
            />
            <div className="header" style={cssBackgroundColor}>
                <img
                    src={props.image}
                    alt={props.name}
                />
            </div>
            <div className="footer">
                <h4>{props.name}</h4>
                <h5>{props.role}</h5>
                <div className="collaborator__favorite">
                    {props.favorite
                        ? <AiFillHeart
                            size={25}
                            onClick={favorite}
                            color="#ff0000" />
                        : <AiOutlineHeart
                            size={25}
                            onClick={favorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Collaborator