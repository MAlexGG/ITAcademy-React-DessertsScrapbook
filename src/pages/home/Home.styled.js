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