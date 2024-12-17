import {
  FooterContainer,
  FooterContent,
  FooterLink,
  FooterLogo,
  FooterSection,
  FooterText,
  FooterTitle,
  SocialLink,
  SocialLinks,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">DHURK</FooterLogo>
          <FooterText>
            Software Architect & Solution Engineer. Specializing in
            enterprise-grade applications and distributed systems.
          </FooterText>
          <SocialLinks>
            <SocialLink
              href="https://github.com/dhurkalenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/dimahurkalenko"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
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
          <FooterLink as="a" href="mailto:hello@artsvit.design">
            hello@artsvit.design
          </FooterLink>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
