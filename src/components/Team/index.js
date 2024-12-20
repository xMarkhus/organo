import hexToRgba from 'hex-to-rgba';
import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
    const cssSection = {
        backgroundColor: hexToRgba(props.color, '0.3'),
        backgroundImage: "url(/assets/fundo.png)"
    };
    const cssH3 = { borderBottomColor: props.color };

    return (
        props.collaborators.length > 0 && (
            <section className="team__container" style={cssSection}>
                <input
                    onChange={event => props.changeColor(event.target.value, props.id)}
                    value={props.color}
                    type="color"
                    className="input__color"
                />
                <h3 style={cssH3}>{props.name}</h3>
                <div className="collaborators">
                    {props.collaborators.map(collaborator => (
                        <Collaborator
                            key={collaborator.id}
                            id={collaborator.id}
                            backgroundColor={props.color}
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                            favorite={collaborator.favorite}
                            whenDelete={props.whenDelete}
                            whenFavorite={props.whenFavorite}
                        />
                    ))}
                </div>
            </section>
        )
    );
};

export default Team;
