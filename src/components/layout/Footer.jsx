import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const pulseCore = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.9;
  }
  100% {
    transform: scale(0.8);
    opacity: 1;
  }
`;

const pulseWave = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.8;
  }
`;

const LogoSVG = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: ${(props) => props.theme.spacing.xs};

  .core {
    animation: ${pulseCore} 2s ease-in-out infinite;
    transform-origin: center;
    fill: #ffffff;
  }

  .wave {
    animation: ${pulseWave} 2s ease-in-out infinite;
    transform-origin: center;
    fill: rgba(255, 255, 255, 0.3);
  }

  &:hover {
    .core,
    .wave {
      animation-duration: 1s;
    }
  }
`;

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const LogoText = styled.span`
  font-family: ${(props) => props.theme.typography.fontFamily.display};
  font-size: ${(props) => props.theme.typography.fontSizes.xl};
  font-weight: 900;
  color: #ffffff;
  letter-spacing: -0.015em;
`;

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.backgroundAlt};
  padding: ${(props) => props.theme.spacing["4xl"]} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: ${(props) => props.theme.containers.content};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing["2xl"]};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`;

const FooterLogo = styled(Link)`
  font-family: ${(props) => props.theme.typography.fontFamily.display};
  font-size: ${(props) => props.theme.typography.fontSizes.xl};
  font-weight: ${(props) => props.theme.typography.fontWeights.semibold};
  color: ${(props) => props.theme.colors.textPrimary};
  letter-spacing: -0.015em;
`;

const FooterText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.typography.fontSizes.base};
  line-height: ${(props) => props.theme.typography.lineHeights.relaxed};
`;

const FooterTitle = styled.h4`
  font-family: ${(props) => props.theme.typography.fontFamily.display};
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
  font-weight: ${(props) => props.theme.typography.fontWeights.semibold};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const FooterLink = styled(Link)`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.typography.fontSizes.base};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    color: ${(props) => props.theme.colors.textPrimary};
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <LogoWrapper to="/">
            <LogoSVG viewBox="0 0 32 32">
              <circle className="wave" cx="16" cy="16" r="14" />
              <circle className="core" cx="16" cy="16" r="8" />
            </LogoSVG>
            <LogoText>Personal Website</LogoText>
          </LogoWrapper>
          <FooterText>
            Full-stack developer passionate about building elegant solutions and
            creating meaningful web experiences.
          </FooterText>
          <SocialLinks>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </SocialLink>
            <SocialLink
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Navigation</FooterTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/cases">Cases</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>
            Feel free to reach out for collaborations or just a friendly hello
          </FooterText>
          <FooterLink as="a" href="mailto:dimaskh.dev@proton.me">
            dimaskh.dev@proton.me
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
