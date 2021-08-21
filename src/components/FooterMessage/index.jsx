import * as Styled from './styles';

import { Text } from '../Text';

export function FooterMessage() {
  return (
    <Text size="small">
      Feito com <Styled.Heart>❤</Styled.Heart> por{' '}
      <Styled.Link
        href="https://github.com/Lucariozin"
        target="_blank"
        rel="nofollow"
      >
        Lucas Felix
      </Styled.Link>
    </Text>
  );
}
