import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {
    const cssSection = {
        backgroundColor: props.secondaryColor,
        backgroundImage: "url(/assets/fundo.png)"
    }
    const cssH3 = { borderBottomColor: props.primaryColor }

    return (
        props.collaborators.length > 0 && <section className="team__container" style={cssSection}>
            <h3 style={cssH3}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(
                    collaborator => {
                        return <Collaborator
                            backgroundColor={props.primaryColor}
                            key={collaborator.name}
                            name={collaborator.name}
                            role={collaborator.role}
                            image={collaborator.image}
                            whenDelete={props.whenDelete} />
                    })}
            </div>
        </section>
    )
}

export default Team
