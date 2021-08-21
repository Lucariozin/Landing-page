import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  overflow: hidden;
  overflow-x: auto;
`;

export const Caption = styled.caption`
  text-align: left;
  font-style: italic;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

export const Table = styled.table`
  min-width: 65rem;
  width: 100%;
  border-collapse: collapse;
  font-size: 2rem;
`;

export const Head = styled.thead`
  background-color: var(--light-gray-color);
`;

export const Body = styled.tbody``;

export const Foot = styled.tfoot`
  background-color: var(--light-gray-color);
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
  border: 0.1rem solid var(--light-gray-color);
`;

export const Td = styled.td`
  padding: 1rem;
  border: 0.1rem solid var(--light-gray-color);
`;
