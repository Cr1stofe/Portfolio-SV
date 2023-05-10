import { AboutMeContainer, HelloAndEducation, Photo } from "./styles";
import AboutMePhoto from '../../assets/AboutMePhoto.svg';
import AboutMePhotoDark from '../../assets/AboutMePhotoDark.svg';

interface ThemeProps {
    theme: string
}

export function AboutMe({ theme }: ThemeProps) {
    return (
        <AboutMeContainer id="about">
            <Photo >
                <img src={theme === 'light' ? AboutMePhoto : AboutMePhotoDark} />
            </Photo>
            <HelloAndEducation >
                <h1> Olá! </h1>
                <p> Me chamo Samyra Vitória, atualmente sou estudante de análise e 
                    desenvolvimento de sistemas, e foi através desse curso que conheci
                    o UX Design, área que sou completamente apaixonada. Aqui você poderá
                    conhecer minhas habilidades, formação e projetos  
                </p>

                <section>
                    <div>
                        <h2> Educação </h2>
                        <p> Análise e desenvolvimento de sistemas - UNESA  </p>
                        <p> 2022-2024 </p>
                    </div>
                    <div>
                        <p> UX Design - Google </p>
                        <p> 2023-2023 </p>
                    </div>
                </section>
            </HelloAndEducation>
        </AboutMeContainer>
    )
}