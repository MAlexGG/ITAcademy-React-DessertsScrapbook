import styled from 'styled-components';

export const CtCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 220px;
    height: 305px;
    border-radius: 20px;
    background-color: var(--secondary-color);
    position: relative;
    filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.36));
`;

export const CtImgCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 170px;
    border-radius: 85px;
    box-shadow: 0px 0px 89px 8px rgba(207, 108, 102, 0.64);
    overflow: hidden;
    margin-top: 20px;
`;

export const ImgCard = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const TxtCard = styled.h4`
    font-size: 1.2rem;
    color: var(--light-color);
    margin: 15px;
    font-weight: 400;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const MoreButton = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: var(--main-color);
    border: none;
    color: var(--secondary-color);
    font-size: 1rem;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 3%;
    right: 5%;
    cursor: pointer;
`;