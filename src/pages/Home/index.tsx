import { HomeContainer } from "./styles";
import { Hero } from '../../components/Hero';
import { Header } from "../../components/Header";
import { AboutMe } from "../../components/AboutMe";
import { Skills } from "../../components/Skills";
import { MyProjects } from "../../components/MyProjects";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { MenuMobile } from "../../components/MenuMobile";

interface ThemeProps {
    theme: string
    setTheme: (theme: string) => void
}

export function Home({theme, setTheme}: ThemeProps) {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return (
        <>
            <MenuMobile 
                menuIsVisible = {menuIsVisible}
                setMenuIsVisible = {setMenuIsVisible}
                theme={theme}
                setTheme={setTheme}
            />
            <HomeContainer>
                <Header 
                    theme={theme}
                    setTheme={setTheme}
                    setMenuIsVisible = {setMenuIsVisible}
                />
                <Hero theme={theme}/>
                <AboutMe theme={theme}/>
                <Skills />
                <MyProjects />
                <Contact />
                <Footer theme={theme}/>
            </HomeContainer>
        </>
    );
}