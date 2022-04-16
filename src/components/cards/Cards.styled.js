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

export const CtSearch = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const InputSearch = styled.input`
    width: 215px;
    border: none;
    border-radius: 25px;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.25);
    padding: 10px;

`;

export const BtSearch = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

export const ImgSearch = styled.img`
    height: 30px;
    filter: invert(6%) sepia(46%) saturate(3560%) hue-rotate(1deg) brightness(97%) contrast(109%);
`;