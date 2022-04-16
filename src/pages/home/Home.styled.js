import styled from 'styled-components';

export const CtHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const Title = styled.h1`
    font-family: 'The Nautigal', cursive;
    font-size: 5rem;
    margin-top: 75px;
    margin-bottom: 5px;
    color: var(--secondary-color);
    @media (min-width: 815px) {
        margin-top: 0px;
        font-size: 6rem;
    }
`;

export const TxtHome = styled.p`
    font-size: 1rem;
    color: var(--secondary-color);
`;