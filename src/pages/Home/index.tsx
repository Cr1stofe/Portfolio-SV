import { HomeContainer } from "./styles";
import { Hero } from '../../components/Hero';
import { Header } from "../../components/Header";
import { AboutMe } from "../../components/AboutMe";
import { Skills } from "../../components/Skills";
import { MyProjects } from "../../components/MyProjects";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";

interface ThemeProps {
    theme: string
    setTheme: (theme: string) => void
}

export function Home({theme, setTheme}: ThemeProps) {
    return (
        <HomeContainer>
            <Header 
                theme={theme}
                setTheme={setTheme}
            />
            <Hero theme={theme}/>
            <AboutMe theme={theme}/>
            <Skills />
            <MyProjects />
            <Contact />
            <Footer theme={theme}/>
        </HomeContainer>
    );
}