import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh + 3rem);
    align-items: center;
    justify-content: center;
    flex: 1;

    h1 {
        color: ${props => props.theme["secondary-color"]};
        font-family: 'Cardo';
        font-style: italic;
        font-size: 5rem;
        font-weight: 400;
    }

    p {
        background: ${props => props.theme["secondary-color"]};
        max-width: 28rem;
        height: 4rem;
        color: ${props => props.theme["primary-color"]};
        border-radius: 30px;
        font-size: 1.125rem;
        font-family: 'Fahkwang';
        font-style: italic;
        font-weight: 400;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.275rem;
    }

    button {
        background: transparent;
        border: none;
        margin-top: 8rem;
        cursor: pointer;
    }

    @media (max-width: 1024px) {

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 0.8rem;
            max-width: 20rem;
            height: 3rem;
        }
    }
`