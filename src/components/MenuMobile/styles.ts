import styled, { css } from "styled-components";

type MenuContainerProps = {
    isVisible: boolean;
    colorTheme: string;
};

export const MenuContainer = styled.div<MenuContainerProps>`
    position: fixed;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;

    opacity: 0;
    pointer-events: none;
    transform: translateX(50px);

    transition: .5s;

    background: ${props => props.theme["tertiary-color"]};

    > svg {
        position: absolute;
        top: 1.5rem;
        right: 2rem;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0);
    `}
`