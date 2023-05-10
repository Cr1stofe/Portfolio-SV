import { HeroContainer } from "./styles";
import { ArrowCircleDown } from '@phosphor-icons/react'
import { Link } from 'react-scroll'

interface ThemeProps {
    theme: string
}

export function Hero({ theme }: ThemeProps) {
    const color = theme === 'light' ? '#B82625' : '#F8DCD8'

    return (
        <HeroContainer id="hero">

            <h1>PORTFOLIO</h1>

            <p>UX/UI DESIGNER</p>

            <button>
                <Link to='about' spy={true} smooth={true} duration={500}>
                    <ArrowCircleDown size={65} color={color} weight="fill" />
                </Link>
            </button>

        </HeroContainer>
    );
}