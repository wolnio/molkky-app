import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

interface StyledButtonProps {
  isClicked: boolean;
}

export const Button = styled.button<StyledButtonProps>`
  border: 3px solid white;
  color: white;
  background-color: transparent;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.1);
  }
  ${({ isClicked }) =>
    isClicked &&
    `
      background-color: rgba(255, 255, 255, 0.2);
    `}
`;
