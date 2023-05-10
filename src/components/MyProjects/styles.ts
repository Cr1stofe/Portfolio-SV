import styled from "styled-components";

export const MyProjectsContainer = styled.div`
    height: 100vh;
    background: ${props => props.theme["tertiary-color"]};
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: flex-start;
    justify-content: center;
`

export const ProjectsButtons = styled.div`
    display: flex;
    margin: 0 auto;
    gap: 10rem;

    button {
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
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 30rem;
    margin: 0 15rem;

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
`