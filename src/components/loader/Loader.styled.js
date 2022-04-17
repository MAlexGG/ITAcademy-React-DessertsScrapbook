import styled from 'styled-components';

export const CtLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    z-index: 1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0%;
`;

export const LoadingText = styled.p`
    font-family: 'The Nautigal', cursive;
    font-size: 10rem;
    z-index: 2;
    color: var(--light-color);
    @media (max-width: 414px) {
        font-size: 5rem;
    }
`;