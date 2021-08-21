import * as Styled from './styles';

import { SectionTwoColumns } from '../../components/SectionTwoColumns';
import SectionTwoColumnsMock from '../../components/SectionTwoColumns/mock';

import { SectionOneColumn } from '../../components/SectionOneColumn';
import SectionOneColumnMock from '../../components/SectionOneColumn/mock';

import { SectionGrid } from '../../components/SectionGrid';
import { textMock, imageMock } from '../../components/SectionGrid/mock';

import { Nav } from '../../components/Nav';
import NavMock from '../../components/Nav/mock';

import { PricingTable } from '../../components/PricingTable';
import { Footer } from '../../components/Footer';
import { FooterMessage } from '../../components/FooterMessage';
import { ContactForm } from '../../components/ContactForm';

export function Home() {
  return (
    <Styled.Container>
      <Nav linksData={NavMock} />

      <SectionTwoColumns {...SectionTwoColumnsMock} idRef="home" />

      <SectionOneColumn {...SectionOneColumnMock} idRef="intro" />

      <SectionGrid {...textMock} idRef="grid-one" />

      <SectionGrid {...imageMock} idRef="gallery" />

      <SectionGrid {...textMock} idRef="grid-two" />

      <SectionOneColumn
        title="Pricing"
        paragraphs={[
          'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.',
          'The release of Apple Silicon-based Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s performance. This post details some background information on the experience of porting Firefox to run natively on these CPUs.',
        ]}
        idRef="pricing"
      >
        <PricingTable />
      </SectionOneColumn>

      <SectionTwoColumns {...SectionTwoColumnsMock}>
        <ContactForm idRef="contact" />
      </SectionTwoColumns>

      <Footer>
        <FooterMessage />
      </Footer>
    </Styled.Container>
  );
}
