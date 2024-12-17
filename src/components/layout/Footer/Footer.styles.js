import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.backgroundAlt};
  border-top: 1px solid ${props => props.theme.colors.border};
  padding: ${props => props.theme.spacing['4xl']} 0;
  margin-top: auto;
`;

export const FooterContent = styled.div`
  max-width: ${props => props.theme.containers.content};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.spacing['2xl']};

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const FooterLogo = styled(Link)`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.xl};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  letter-spacing: -0.015em;
`;

export const FooterText = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSizes.base};
  line-height: ${props => props.theme.typography.lineHeights.relaxed};
`;

export const FooterTitle = styled.h4`
  font-family: ${props => props.theme.typography.fontFamily.display};
  font-size: ${props => props.theme.typography.fontSizes.lg};
  font-weight: ${props => props.theme.typography.fontWeights.semibold};
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const FooterLink = styled(Link)`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSizes.base};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`;

export const SocialLink = styled.a`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.fontSizes.lg};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.textPrimary};
  }
`;
