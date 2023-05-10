import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    padding: 2.5rem;
    position: fixed;
    transition: 0.2s;

    :hover {
        background: ${props => props.theme["primary-color"]};
    }

    img {
        width: 9rem;
        height: 1.875rem;
        cursor: pointer;
    }

    nav {
        display: flex;
        gap: 2.25rem;

        a {
            color: ${props => props.theme["secondary-color"]};
            font-size: 1.25rem;
            cursor: pointer;
        }

        :last-child {
            cursor: pointer;
        }
    }
`