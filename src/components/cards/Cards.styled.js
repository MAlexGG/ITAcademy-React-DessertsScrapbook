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