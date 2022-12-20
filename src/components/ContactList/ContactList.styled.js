import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  list-style: none;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 20px;
  background: #c9ffee42;
`;

export const Btn = styled.button`
  display: block;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(84, 193, 185, 1),
    -23px 0 20px -23px rgba(84, 193, 185, 0.8),
    23px 0 20px -23px rgba(84, 193, 185, 0.8),
    0 0 40px rgba(84, 193, 185, 0.1) inset;
  outline: none;
  background: linear-gradient(
    0deg,
    rgba(110, 226, 222, 0.75) 0%,
    rgba(212, 252, 251, 1) 38%,
    rgba(255, 255, 255, 0.65) 100%
  );
`;
export const Item = styled.li`
  padding: 0 10px;
  display: flex;
  gap: 20px;
  align-items: center;
`;
