import { useState } from 'react';
import { Skittle } from '../Skittle/Skittle';
import { BoardWrapper, Row } from './SkittleBoard.style';

export const SkittleBoard = () => {
  const [isSkittleActivated, setIsSkittleActivated] = useState(false);

  const generateBoard = Array.from({ length: 12 }, (_, index) => {
    return <Skittle key={index} value={index + 1} activated />;
  });
  console.log(generateBoard);
  return (
    <>
      <BoardWrapper>{generateBoard}</BoardWrapper>

      <button>Add points</button>
    </>
  );
};
