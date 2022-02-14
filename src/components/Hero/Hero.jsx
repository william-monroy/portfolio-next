import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
        I'm William Monroy
      </SectionTitle>
      <SectionText>
      Web Developer <br />
      Microsoft Learn Student Ambassador <br />
      </SectionText>
      <Button onClick={() => window.location = 'http://google.com'}>View my Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;