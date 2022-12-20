import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  display: block;
  width: 250px;
  margin: 0 auto;
  margin-top: 5px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  background: linear-gradient(
    0deg,
    rgba(110, 226, 222, 0.75) 0%,
    rgba(212, 252, 251, 1) 38%,
    rgba(255, 255, 255, 0.65) 100%
  );
`;

export const Btn = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 15px 10px;
  border-radius: 10px;
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
