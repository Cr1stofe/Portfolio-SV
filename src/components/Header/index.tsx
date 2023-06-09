import { HeaderContainer } from './styles';
import { Sun, Moon, List } from 'phosphor-react';
import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logoDark.svg';
import { Link } from 'react-scroll'

interface ThemeProps {
    theme: string
    setTheme: (theme: string) => void
}

interface MenuProps {
    setMenuIsVisible: (menuIsVisible: boolean) => void
}

interface HeaderProps extends ThemeProps, MenuProps {}

export function Header({ theme, setTheme, setMenuIsVisible }: HeaderProps) {
    const color = theme === 'light' ? '#B82625' : '#F8DCD8'

    return (
        <HeaderContainer>
            <Link to='hero' spy={true} smooth={true} duration={500}> <img src={theme === 'light' ? logo : logoDark}/> </Link>
            <nav>
                <Link to='about' spy={true} smooth={true} duration={500}>SOBRE MIM</Link>
                <Link to='projects' spy={true} smooth={true} duration={500}>MEUS PROJETOS</Link>
                <Link to='contact' spy={true} smooth={true} duration={500}>CONTATO</Link>

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

            <section>
                <List size={27} color={color} onClick={() => setMenuIsVisible(true)} className='mobile'/>
            </section>
        </HeaderContainer>
    );
}