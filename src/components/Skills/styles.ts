import styled from "styled-components";

export const SkillsContainer = styled.div`
    height: 100vh;
    max-width: 74rem;
    margin: 0 auto;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-template-columns: 24rem 1fr;
    grid-template-rows: 17rem 17rem;
    gap: 2rem;
`

const DefaultCards = styled.div`
    border-radius: 20px;
    padding: 2rem;
    font-size: 1.5rem;

    h1 {
        display: flex;
        font-family: 'Cardo', serif;
        font-size: 2.5rem;
        font-weight: bold;
    }
`

export const Experience = styled(DefaultCards)`
    background: ${props => props.theme["secondary-color"]};
    color: ${props => props.theme["tertiary-color"]};

    h1 {
        justify-content: center;
    }
`

export const HardSkills = styled(DefaultCards)`
    border: 3px solid ${props => props.theme["secondary-color"]};
    color: ${props => props.theme["secondary-color"]};
    overflow: hidden;

    div {
        display: flex;
        gap: 3rem;
    }

    h1 {
        justify-content: flex-start;
    }

    ul {
        padding-left: 3rem;
    }
`

export const Languages = styled(DefaultCards)`
    border: 3px solid ${props => props.theme["secondary-color"]};
    color: ${props => props.theme["secondary-color"]};

    h1 {
        justify-content: center;
    }
`

export const SoftSkills = styled(DefaultCards)`
    background: ${props => props.theme["secondary-color"]};
    color: ${props => props.theme["tertiary-color"]};

    h1 {
        justify-content: flex-start;
    }

    ul {
        padding-left: 3rem;
    }
`