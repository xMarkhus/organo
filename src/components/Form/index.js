import { useState } from "react"
import Button from "../Button"
import SuspendedList from "../SuspendedList"
import TextField from "../TextField"
import "./Form.css"

const Form = (props) => {
    
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSave = (event) => {
        event.preventDefault()
        props.whenCollaboratorRegistered({
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
        </section>
    )
}

export default Form
