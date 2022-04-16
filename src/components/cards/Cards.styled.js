import styled from 'styled-components';

export const CtCards = styled.div`
    display: grid;
    grid-template-columns: 220px;
    gap: 30px;
    padding: 30px;
    @media (min-width: 768px) {
        grid-template-columns: 220px 220px 220px;
    }
    @media (min-width: 1280px) {
        grid-template-columns: 220px 220px 220px 220px 220px;
    }
`;

export const BtMore = styled.button`
    width: 120px;
    height: 40px;
    background-color: var(--secondary-color);
    color: var(--light-color);
    border-radius: 20px;
    border: none;
    cursor: pointer;
    font-family: 'The Nautigal', cursive;
    font-size: 1.7rem;
    &:hover{
        background-color: var(--aux-color);
        color: var(--secondary-color);
    }
`;