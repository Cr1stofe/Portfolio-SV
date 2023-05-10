import styled from "styled-components";

export const FooterContainer = styled.footer`
    height: 19.75rem;
    background: ${props => props.theme["secondary-color"]};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["primary-color"]};
    font-family: 'Montserrat', sans-serif; 

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        font-weight: 400;
    }

    a {
        color: inherit;
        cursor: pointer;
    }

    img {
        cursor: pointer;
    }
`

export const ContentTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 600;  
`

export const LinksContainer = styled.div`
    display: flex;
    gap: 1rem;
`