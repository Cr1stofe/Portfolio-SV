import { FooterContainer, ContentTitle, LinksContainer } from "./styles";
import { LinkedinLogo, InstagramLogo, WhatsappLogo, BehanceLogo } from 'phosphor-react';
import { Link } from 'react-scroll';
import logoDarkFooter from '../../assets/logoDarkFooter.svg';
import logoDark from '../../assets/logoDark.svg';

interface ThemeProps {
    theme: string
}

export function Footer({ theme }: ThemeProps ) {
    return (
        <FooterContainer>
            <Link to='hero' spy={true} smooth={true} duration={500}> <img src={theme === 'light' ? logoDark : logoDarkFooter}/> </Link>
            <ContentTitle> Conteúdo </ContentTitle>
            <nav>
                <Link to='about' spy={true} smooth={true} duration={500}>SOBRE MIM</Link>
                <Link to='projects' spy={true} smooth={true} duration={500}>MEUS PROJETOS</Link>
                <Link to='contact' spy={true} smooth={true} duration={500}>CONTATO</Link>
            </nav>
            <LinksContainer>
                <a href="https://www.linkedin.com/in/samyra-vitóriab/" target="_blank"> 
                    <LinkedinLogo size={24} href="google.com" />
                </a>
                <a href="https://www.instagram.com/samyravitoriab/" target="_blank"> 
                    <InstagramLogo size={24} />
                </a>
                <a href="https://www.linkedin.com/in/samyra-vitóriab/" target="_blank"> 
                    <WhatsappLogo size={24} />
                </a>
                <a href="https://www.linkedin.com/in/samyra-vitóriab/" target="_blank"> 
                    <BehanceLogo size={24} />
                </a>
            </LinksContainer>
        </FooterContainer>
    )
}