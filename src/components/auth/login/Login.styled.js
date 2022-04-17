import styled from "styled-components";

export const CtLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const TxtLoginTitle = styled.h2`
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

export const CtLoginForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 255px;
    background-color: var(--aux-color);
    border-radius: 10px;
    margin-top: 25px;
    @media (max-width: 414px) {
        width: 300px; 
    }
`;

export const InputLogin = styled.input`
    width: 400px;
    height: 35px;
    border: none;
    border-radius: 25px;
    padding-left: 10px;
    margin: 15px;
    @media (max-width: 414px) {
        width: 260px; 
    }
`;

export const CtButtonsForm = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`; 

export const BtForm = styled.button`
    background-color: transparent;
    color: var(--secondary-color);
    border: 3px solid var(--secondary-color);
    width: 100px;
    height: 40px;
    border-radius: 20px;
    font-size: 1rem;
    margin: 15px;
    font-family: 'Akshar', sans-serif;
    &:hover 
    {
      background-color: var(--secondary-color);
      color: var(--light-color);
    }
`;