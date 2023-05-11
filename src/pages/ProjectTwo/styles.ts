import styled from "styled-components";

export const ProjectTwoContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    color: ${props => props.theme["secondary-color"]};

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .button {
        border: none;
        border-radius: 20px;
        background: ${props => props.theme["secondary-color"]};
        color: ${props => props.theme["primary-color"]};
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
        padding: 1.25rem 3rem;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        div {
            flex-direction: column;
            
            h1 {
                font-size: 1.2rem;
            }
        }

        .button {
            font-size: 0.9rem;
        }
    }
`