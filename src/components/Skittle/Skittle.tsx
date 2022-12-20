import { Button } from '../Skittle/Skittle.style';
import { StyledEngineProvider } from '@mui/material/styles';
import { Dispatch, SetStateAction, useState } from 'react';

interface SkittleProps {
  value: number;
  activated: boolean;
}

export const Skittle = ({ value, activated }: SkittleProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Button
        onClick={handleOnClick}
        isClicked={isClicked}
        className="singleSkittle"
      >
        {value}
      </Button>
    </StyledEngineProvider>
  );
};
