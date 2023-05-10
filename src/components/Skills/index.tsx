import { 
    Experience, 
    HardSkills, 
    Languages, 
    SkillsContainer, 
    SoftSkills 
} 
from "./styles";

export function Skills() {
    return (
        <SkillsContainer>
            <Experience>
                <h1> Experiência </h1>
                <p> Infelizmente ainda não possuo experiência, 
                    além dos meus cases de estudo. 
                </p>
            </Experience>

            <HardSkills>
                <h1> Hard Skills </h1>
                <div>
                    <ul>
                        <li> Figma </li>
                        <li> Design Thinking </li>
                        <li> Prototipagem </li>
                        <li> Pesquisa </li>
                    </ul>

                    <ul>
                        <li> HTML </li>
                        <li> CSS </li>
                        <li> Wireframes </li>
                        <li> Testes de usabilidade </li>
                    </ul>
                </div>
            </HardSkills>

            <Languages>
                <h1> Idiomas </h1>
                <p> Inglês - Nível C1 (avançado) </p>
                <p> Espanhol - Nível básico </p>
            </Languages>

            <SoftSkills>
                <h1> Soft Skills </h1>
                <ul>
                    <li> Criatividade </li>
                    <li> Boa comunicação </li>
                    <li> Flexibilidade </li>
                    <li> Autodidata </li>
                </ul>
            </SoftSkills>
        </SkillsContainer>
    )
}