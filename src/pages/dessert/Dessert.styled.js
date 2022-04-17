import styled from 'styled-components';

export const CtDessert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    font-family: 'Akshar', sans-serif;
`;

export const TxtDessertTitle = styled.h2`
    font-family: 'The Nautigal', cursive;
    color: var(--light-color);
    font-size: 3rem;
    text-align: center;
    margin-top: 80px;
    margin-bottom: 15px;
    @media (min-width: 815px) {
        font-size: 4.5rem; 
    }
`;

export const CtInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 815px) {
        flex-direction: row;
    }
`;

export const CtImgDessert = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 270px;
    border-radius: 135px;
    box-shadow: 0px 0px 89px 8px rgba(207, 108, 102, 0.64);
    overflow: hidden;
    margin-top: 20px;
    @media (min-width: 574px) {
        width: 370px;
        height: 370px;
        border-radius: 185px; 
    }
`;

export const ImgDessert = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const CtText = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    @media (min-width: 815px) {
        margin-left: 50px;
    }
`;

export const TxtIngredients = styled.ul`
    color: var(--aux-color);
    font-size: 1.2rem;
`;

export const TxtIngredient = styled.li`
    color: var(--light-color);
`;

export const BtStart = styled.button`
    width: 174px;
    height: 45px;
    border: 2px solid var(--main-color);
    color: var(--main-color);
    background-color: transparent;
    border-radius: 28px;
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 45px;
    margin-left: 20px;
    cursor: pointer;
    &:hover{
        background-color: var(--main-color);
        color: var(--secondary-color);
    }
`;