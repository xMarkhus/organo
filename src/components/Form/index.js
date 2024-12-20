import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import Button from "../Button"
import SuspendedList from "../SuspendedList"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {
    
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [teamName, setTeamName] = useState('')
    const [teamColor, setTeamColor] = useState('')

    const whenSave = (event) => {
        event.preventDefault()
        props.whenCollaboratorRegistered({
            id: uuidv4(),
            favorite: false,
            name,
            role,
            image,
            team,
        })

        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form__container">
            <form className="form" onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    whenChanging={value => setName(value)}
                />
                <TextField 
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    whenChanging={value => setRole(value)}
                />
                <TextField 
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    whenChanging={value => setImage(value)}
                />
                <SuspendedList
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={team}
                    whenChanging={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form className="form" onSubmit={(event) => {
                event.preventDefault()
                props.registerTeam({ name: teamName, color: teamColor })
                setTeamName('')
                setTeamColor('')
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <TextField 
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    whenChanging={value => setTeamName(value)}
                />
                <TextField
                    required
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    whenChanging={value => setTeamColor(value)}
                />
                <Button>
                    Criar novo time
                </Button>
            </form>
        </section>
    )
}

export default Form
