import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82cffa",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#a6d157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#e06b69",
    },
    {
      id: uuidv4(),
      name: "Ux e Design",
      color: "#db6ebf",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#ffba05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#ff8a29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const whenNewAddedCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator(id) {
    setCollaborators(collaborators.filter(collaborator => collaborator.id !== id));
  }

  function changeColorTeam(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4() }]);
  }

  function favoriteCollaborator(id) {
    setCollaborators(collaborators.map(collaborator => {
      if(collaborator.id === id) collaborator.favorite = !collaborator.favorite;
      return collaborator;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form
        registerTeam={registerTeam}
        teams={teams.map(team => team.name)}
        whenCollaboratorRegistered={collaborator => whenNewAddedCollaborator(collaborator)}
      />
      <section className="teams">
        <h1>Minha Organização</h1>
        {teams.map(team =>
          <Team
            changeColor={changeColorTeam}
            key={team.id}
            id={team.id}
            name={team.name}
            color={team.color}
            collaborators={collaborators.filter(collaborator =>
              collaborator.team === team.name)}
            whenDelete={deleteCollaborator}
            whenFavorite={favoriteCollaborator}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
