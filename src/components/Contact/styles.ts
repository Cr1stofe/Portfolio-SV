import styled from "styled-components";

export const ContactContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 1024px) {
        padding: 2rem;
    }
`

export const ContactTitle = styled.p`
    color: ${props => props.theme["secondary-color"]};
    font-family: 'Cardo', serif;
    font-size: 5rem;
    max-width: 40rem;
    text-align: right;
    margin: 6rem 15rem 6rem 0;
    transition: .5s;

    @media (max-width: 1300px) {
        font-size: 4rem;
        max-width: 30rem;
    }

    @media (max-width: 1024px) {
        font-size: 2.8rem;
        max-width: 15rem;
        margin: 0 auto;
        text-align: left;
    }
`

export const ContactButtons = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 10rem;
    transition: .5s;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        border: none;
        border-radius: 20px;
        width: 15rem;
        background: ${props => props.theme["secondary-color"]};
        color: ${props => props.theme["tertiary-color"]};
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
        padding: 1.25rem 2rem;
        cursor: pointer;
    }

    @media (max-width: 1300px) {
        gap: 4.5rem;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;

        button {
            padding: 1rem 2rem;
            font-size: 1rem;
            width: 13rem;
        }
    }
`