import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: horizontal;
`;

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(1rem, 1fr));

  grid-gap: 0 0.5rem;

  .singleSkittle {
    grid-column-end: span 2;
    grid-row-end: span 2;
    &:nth-child(7),
    &:nth-child(9),
    &:nth-child(8) {
      grid-row-start: 1;
    }
    &:nth-child(7) {
      grid-column-start: 2;
    }
    &:nth-child(9) {
      grid-column-start: 4;
    }
    &:nth-child(8) {
      grid-column-start: 6;
    }
    &:nth-child(5),
    &:nth-child(11),
    &:nth-child(12),
    &:nth-child(6) {
      grid-row-start: 3;
    }
    &:nth-child(5) {
      grid-column-start: 1;
    }
    &:nth-child(11) {
      grid-column-start: 3;
    }
    &:nth-child(12) {
      grid-column-start: 5;
    }
    &:nth-child(6) {
      grid-column-start: 7;
    }
    &:nth-child(3),
    &:nth-child(10),
    &:nth-child(4) {
      grid-row-start: 5;
    }
    &:nth-child(3) {
      grid-column-start: 2;
    }
    &:nth-child(10) {
      grid-column-start: 4;
    }
    &:nth-child(4) {
      grid-column-start: 6;
    }
    &:nth-child(1),
    &:nth-child(2) {
      grid-row-start: 7;
    }
    &:nth-child(1) {
      grid-column-start: 3;
    }
    &:nth-child(2) {
      grid-column-start: 5;
    }
  }
`;
