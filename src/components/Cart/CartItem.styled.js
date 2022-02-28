import styled from "styled-components";

export const CartItemStyle = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #104080;
    padding: 1rem 0;
    margin: 1rem 0;
    button {
        font: inherit;
        font-weight: bold;
        font-size: 1.25rem;
        color: #104080;
        border: 1px solid #104080;
        width: 3rem;
        text-align: center;
        border-radius: 6px;
        background: transparent;
        cursor: pointer;
        margin-left: 1rem;
        margin: 0.25rem;
    }
    button:hover,
    button:active {
        background: #104080;
        color: white;
    }
`;

export const CartSummaryStyle = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CartItemPriceStyle = styled.div`
    font-weight: bold;
    color: #104080;
`;

export const CartItemQtyStyle = styled.div`
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
`;

export const CartItemActions = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

