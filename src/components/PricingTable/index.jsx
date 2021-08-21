import * as Styled from './styles';

export function PricingTable() {
  return (
    <Styled.Container>
      <Styled.Table>
        <Styled.Caption>Pricing table</Styled.Caption>
        <Styled.Head>
          <Styled.Tr>
            <Styled.Th>Title 1</Styled.Th>
            <Styled.Th>Title 2</Styled.Th>
            <Styled.Th>Title 3</Styled.Th>
            <Styled.Th>Title 4</Styled.Th>
            <Styled.Th>Title 5</Styled.Th>
          </Styled.Tr>
        </Styled.Head>
        <Styled.Body>
          <Styled.Tr>
            <Styled.Td>Content 1</Styled.Td>
            <Styled.Td>Content 2</Styled.Td>
            <Styled.Td>Content 3</Styled.Td>
            <Styled.Td>Content 4</Styled.Td>
            <Styled.Td>Content 5</Styled.Td>
          </Styled.Tr>
          <Styled.Tr>
            <Styled.Td>Content 1</Styled.Td>
            <Styled.Td>Content 2</Styled.Td>
            <Styled.Td>Content 3</Styled.Td>
            <Styled.Td>Content 4</Styled.Td>
            <Styled.Td>Content 5</Styled.Td>
          </Styled.Tr>
          <Styled.Tr>
            <Styled.Td>Content 1</Styled.Td>
            <Styled.Td>Content 2</Styled.Td>
            <Styled.Td>Content 3</Styled.Td>
            <Styled.Td>Content 4</Styled.Td>
            <Styled.Td>Content 5</Styled.Td>
          </Styled.Tr>
        </Styled.Body>
        <Styled.Foot>
          <Styled.Tr>
            <Styled.Td></Styled.Td>
            <Styled.Td></Styled.Td>
            <Styled.Td></Styled.Td>
            <Styled.Td></Styled.Td>
            <Styled.Td>Footer</Styled.Td>
          </Styled.Tr>
        </Styled.Foot>
      </Styled.Table>
    </Styled.Container>
  );
}
