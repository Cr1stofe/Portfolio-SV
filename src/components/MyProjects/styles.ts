import styled from "styled-components";

export const MyProjectsContainer = styled.div`
    height: 100vh;
    background: ${props => props.theme["tertiary-color"]};
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 1024px) {
        padding: 3.5rem 2rem;
        gap: 2rem;
    }
`

export const ProjectsButtons = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 10rem;
    transition: 0.5s;

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        border: none;
        border-radius: 20px;
        width: 16rem;
        background: ${props => props.theme["secondary-color"]};
        color: ${props => props.theme["tertiary-color"]};
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
        padding: 1.25rem 3rem;
        cursor: pointer;
    }

    @media (max-width: 1300px) {
        gap: 4.5rem;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;

        .button {
            padding: 1rem 2rem;
            font-size: 1rem;
            width: 13rem;
        }
    }
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 30rem;
    margin: 0 15rem;
    transition: .5s;

    h1 {
        font-size: 5rem;
        color: ${props => props.theme["secondary-color"]};
        font-family: 'Cardo', serif;
        font-weight: 400;
    }

    p {
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
        color: ${props => props.theme["font-color"]};
    }

    @media (max-width: 1300px) {
        max-width: 30rem;

        h1 {
            font-size: 4rem;
        }
    }

    @media (max-width: 1024px) {
        gap: 1rem;
        max-width: 15rem;
        margin: 0 auto;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.2rem;
        }
    }
`