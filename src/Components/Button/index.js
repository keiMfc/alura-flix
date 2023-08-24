import { styled } from 'styled-components';

const Button = styled.button`
    background: var(--color-primary);
    color: var(--color-white);
    min-width: 180px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: var(--button);
    transition: opacity 0.4s;
    padding: 10px 20px;
    cursor: pointer;
    border: none;

    &:hover {
    background: var(--color-active);
    }
`;

export default Button;