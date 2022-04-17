import styled from 'styled-components';

export const CtNavbar = styled.div`
    display: flex;
    width: 100vw;
`;

export const CtMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 15px;
    top: 10px;
`;

export const BtNavbar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: none;
    background-color: var(--aux-color);
    cursor: pointer;
    @media (min-width: 815px) {
        display: none;
    }
`;

export const ImgNavbar = styled.img`
    height: 100%;
    filter: invert(92%) sepia(32%) saturate(216%) hue-rotate(302deg) brightness(100%) contrast(97%);
`;

export const CtDropdownMenu = styled.div`
    display: ${({ isVisible }) => isVisible ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 165px;
    background-color: var(--aux-color);
    border-radius: 20px;
    margin-top: 10px;
    z-index: 1;
`;

export const BtDropdownMenu = styled.button`
    color: var(--light-color);
    font-size: 1.5rem;
    margin: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-family: 'Akshar', sans-serif;
`;

export const CtInlineMenu= styled.div`
    display: none;
    cursor: pointer;
    color: ${(props) => props.color};
    @media (min-width: 815px) {
        display: flex;
        align-items: center;
    }
`;

export const BtInlineMenu = styled.button`
    color: ${(props) => props.color};
    font-size: 1.2rem;
    margin: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    font-family: 'Akshar', sans-serif;
`;



export const Logo = styled.img`
    display: none;
    @media (min-width: 815px) {
        display: flex;
        width: 50px;
        margin: 10px;
        filter: ${(props) => props.filter};
    }
`;



/* export const BtBack = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: none;
    background-color: transparent;
`;

export const ImgBack = styled.img`
    width: 100%;
    filter: invert(92%) sepia(32%) saturate(216%) hue-rotate(302deg) brightness(100%) contrast(97%);
`; */

