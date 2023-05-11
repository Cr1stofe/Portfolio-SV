import { MyProjectsContainer, ProjectsButtons, Text } from "./styles";
import { LinkSimpleHorizontal } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function MyProjects() {
    return (
        <MyProjectsContainer id="projects">
            <Text>
                <h1> MEUS PROJETOS </h1>
                <p> Escolhi 3 cases de estudo, feitos após muita pesquisa
                    e entendimento acerca do usuário, pra você conhecer
                    melhor meu trabalho :) 
                </p>
            </Text>

            <ProjectsButtons>
                <Link to="/project1" className="button">
                    PROJETO 1
                    <LinkSimpleHorizontal size={25}/>
                </Link>

                <Link to="/project2" className="button">
                    PROJETO 2
                    <LinkSimpleHorizontal size={25}/>
                </Link>

                <Link to="/project3" className="button">
                    PROJETO 3
                    <LinkSimpleHorizontal size={25}/>
                </Link>
            </ProjectsButtons>
        </MyProjectsContainer>
    )
}