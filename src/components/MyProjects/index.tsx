import { MyProjectsContainer, ProjectsButtons, Text } from "./styles";
import { LinkSimpleHorizontal } from 'phosphor-react'

export function MyProjects() {
    return (
        <MyProjectsContainer id="projects">
            <Text>
                <h1> MEUS PROJETOS </h1>
                <p> Escolhi 3 cases de estudo, feitos após muita pesquisa
                    e entendimento acerca do usuário, pra você conhecer
                    melhor meu trabalho. Esse site/portfolio foi todo 
                    desenvolvido por mim, do UI ao desenvolvimento web :) 
                </p>
            </Text>

            <ProjectsButtons>
                <button>
                    PROJETO 1
                    <LinkSimpleHorizontal size={25}/>
                </button>

                <button>
                    PROJETO 2
                    <LinkSimpleHorizontal size={25}/>
                </button>

                <button>
                    PROJETO 3
                    <LinkSimpleHorizontal size={25}/>
                </button>
            </ProjectsButtons>
        </MyProjectsContainer>
    )
}