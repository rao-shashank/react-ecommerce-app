import styled from "styled-components";

export const HeaderCartButtonStyle = styled.div`
    button {
    cursor: pointer;
    font: inherit;
    border: none;
    background: rgb(230, 190, 16);
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    }
`;

export const CartIconStyle = styled.span`
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
`;

export const CartBadgeStyle = styled.span`
    background: #104080;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
`;

