import styled from 'styled-components';

export const CtLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color);
    opacity: 0.7;
    border-radius: 20px;
    z-index: 1;
    width: 500px;
    height: 250px;
    position: absolute;
    top: 65%;
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