import { ButtonProps } from './Button.interface';
import { StyledButton } from './Button.style';

export const Button = ({ value, variant }: ButtonProps) => {
  return (
    <>
      <StyledButton>{value}</StyledButton>
    </>
  );
};
