import { MenuContainer } from "./styles"
import { Link } from 'react-scroll'
import { Sun, Moon, X } from '@phosphor-icons/react'
import { useEffect } from "react"

interface ThemeProps {
    theme: string
    setTheme: (theme: string) => void
}

interface MenuProps {
    menuIsVisible: boolean
    setMenuIsVisible: (menuIsVisible: boolean) => void
}

interface ThemeMobileProps extends ThemeProps, MenuProps {}

export function MenuMobile({ menuIsVisible, theme, setMenuIsVisible, setTheme }: ThemeMobileProps) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible])

    return (
        <MenuContainer 
            isVisible = {menuIsVisible}
            colorTheme = {theme}
        >
            <X size={27} onClick={() => setMenuIsVisible(false)}/>
            <nav>
                <Link to='about' spy={true} smooth={true} duration={500} onClick={() => setMenuIsVisible(false)}>SOBRE MIM</Link>
                <Link to='projects' spy={true} smooth={true} duration={500} onClick={() => setMenuIsVisible(false)}>MEUS PROJETOS</Link>
                <Link to='contact' spy={true} smooth={true} duration={500} onClick={() => setMenuIsVisible(false)}>CONTATO</Link>

                {theme === 'light' 
                    ? <Sun 
                        size={24} 
                        color="#B82625"
                        onClick={() => setTheme('dark')}
                    /> 
                    : <Moon 
                        size={24} 
                        color='#F8DCD8'
                        onClick={() => setTheme('light')}
                    />
                }
            </nav>
        </MenuContainer>
    )
}