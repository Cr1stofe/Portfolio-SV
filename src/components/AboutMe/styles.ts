import styled from "styled-components";

export const AboutMeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${(props) => props.theme["tertiary-color"]};
    margin: 0 auto;
    padding: 5rem;
    gap: 10rem;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: fit-content;
        padding: 2rem;
        gap: 0.5rem;
    }
`

export const Photo = styled.div`
    img {
        width: 23rem;
        height: 35rem;
    }

    @media (max-width: 480px) {
        img {
            width: 15rem;
            height: 27rem;
        }
    }
`

export const HelloAndEducation = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    padding: 2rem;
    gap: 1.75rem;
    color: ${props => props.theme["secondary-color"]};

    h1 {
        display: flex;
        justify-content: center;
        font-size: 5rem;
        font-family: 'Cardo', serif;
        font-weight: bold;
    }

    p {
        font-size: 1.25rem;
        font-family: 'Montserrat', sans-serif;
    }

    section {
        display: flex;
        flex-direction: column;
        color: ${props => props.theme["tertiary-color"]};
        background: ${props => props.theme["secondary-color"]};
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        gap: 1rem;

        h2 {
            font-size: 2.5rem;
            font-family: 'Cardo', serif;
            font-weight: bold;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.25rem;
        }

        section {
            h2 {
                font-size: 2rem;
            }
        }
    }
`
