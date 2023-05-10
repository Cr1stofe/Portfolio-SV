import { ContactButtons, ContactContainer, ContactTitle } from "./styles";
import { LinkedinLogo, InstagramLogo, Envelope } from 'phosphor-react';

export function Contact () {
    return (
        <ContactContainer id="contact">
            <ContactTitle>
                GOSTOU? ME CONTATA POR AQUI
            </ContactTitle>
            
            <ContactButtons>
                <a href="https://www.linkedin.com/in/samyra-vitóriab/" target="_blank">
                    <button>
                        LinkedIn
                        <LinkedinLogo size={25}/>
                    </button>
                </a>

                <a href="https://www.instagram.com/samyravitoriab/" target="_blank">
                    <button>
                        Instagram
                        <InstagramLogo size={25}/>
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/samyra-vitóriab/" target="_blank">
                    <button>
                        Email
                        <Envelope size={25}/>
                    </button>
                </a>
            </ContactButtons>
        </ContactContainer>
    )
}