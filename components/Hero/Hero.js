import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
        <SectionTitle>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My purpose is to help, an create there dream website, or application. The skills I have developed and will continue to develop, can turn any project, or idea into a reality.
        </SectionText>
        <Button onclick={() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;