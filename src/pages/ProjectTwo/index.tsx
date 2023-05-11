import { ProjectTwoContainer } from "./styles";
import { Link } from 'react-router-dom';
import { SmileySad } from '@phosphor-icons/react'

export function ProjectTwo() {
    return (
        <ProjectTwoContainer>
            <div>
                <h1> Ops, ainda em construção </h1>
                <SmileySad size={50}/>
            </div>
            <Link to="/" className="button"> 
                Voltar para a página home 
            </Link>
        </ProjectTwoContainer>
    )
}