import { motion } from "framer-motion";
import styled from "styled-components";

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: ${(props) => props.theme.spacing.xl};
  padding-top: calc(80px + ${(props) => props.theme.spacing.xl});
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.theme.typography.fontFamily.base};
  color: ${(props) => props.theme.colors.textPrimary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Section = styled.section`
  width: 100%;
  padding: ${(props) => props.theme.spacing["2xl"]} 0;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;

  &:nth-child(even) {
    background: ${(props) => props.theme.colors.backgroundAlt};
  }
`;

const TopSection = styled(Section)`
  padding-top: 0;
`;

const SectionContent = styled.div`
  max-width: min(${(props) => props.theme.containers.content}, 95%);
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 ${(props) => props.theme.spacing.xl};
  }
`;

const TopSectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing["2xl"]};
  align-items: start;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 0.8fr 1.2fr;
    gap: ${(props) => props.theme.spacing["4xl"]};
  }
`;

const ProfileImage = styled(motion.div)`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  overflow: hidden;
  aspect-ratio: 3/4;
  box-shadow: ${(props) => props.theme.shadows.lg};
  margin-bottom: ${(props) => props.theme.spacing.xl};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.primary};
  text-align: ${(props) => (props.$center ? "center" : "left")};
`;

const Subtitle = styled(motion.h2)`
  font-family: ${(props) => props.theme.typography.fontFamily.display};
  font-size: ${(props) => props.theme.typography.fontSizes["2xl"]};
  font-weight: ${(props) => props.theme.typography.fontWeights.regular};
  line-height: ${(props) => props.theme.typography.lineHeights.base};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  max-width: ${(props) => props.theme.containers.text};
`;

const Text = styled(motion.p)`
  font-size: ${(props) => props.theme.typography.fontSizes.lg};
  line-height: ${(props) => props.theme.typography.lineHeights.relaxed};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  max-width: ${(props) => props.theme.containers.text};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  margin-top: ${(props) => props.theme.spacing["2xl"]};

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${(props) => props.theme.spacing.lg};
  background: ${(props) =>
    `linear-gradient(to right, ${props.$gradientStart} 0%, ${props.$gradientEnd} 100%)`};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  svg {
    width: 32px;
    height: 32px;
    color: white;
    stroke-width: 2;
  }
`;

const SkillCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.shadows.md};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }
`;

const SkillTitle = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily.display};
  font-size: ${(props) => props.theme.typography.fontSizes.xl};
  font-weight: ${(props) => props.theme.typography.fontWeights.semibold};
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const SkillDescription = styled.p`
  font-size: ${(props) => props.theme.typography.fontSizes.base};
  line-height: ${(props) => props.theme.typography.lineHeights.relaxed};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
`;

const About = () => {
  // ... existing code ...
  const skills = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
      ),
      gradientStart: "#FF0844",
      gradientEnd: "#FFB199",
      title: "System Architecture",
      description:
        "Designing scalable distributed systems and microservices architectures.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
      gradientStart: "#7F00FF",
      gradientEnd: "#E100FF",
      title: "Cloud Solutions",
      description:
        "Expertise in AWS, Azure, and GCP with focus on cloud-native architectures.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
      gradientStart: "#0093E9",
      gradientEnd: "#80D0C7",
      title: "Database Design",
      description:
        "Optimizing data structures and implementing efficient database solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      gradientStart: "#08AEEA",
      gradientEnd: "#2AF598",
      title: "Security & DevOps",
      description:
        "Implementing secure architectures with modern DevOps practices.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
          />
        </svg>
      ),
      gradientStart: "#FF3CAC",
      gradientEnd: "#784BA0",
      title: "Performance",
      description:
        "Optimizing system performance and implementing scalable solutions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
      ),
      gradientStart: "#F857A6",
      gradientEnd: "#FF5858",
      title: "Tech Leadership",
      description:
        "Leading technical teams and driving architectural decisions.",
    },
  ];

  return (
    <AboutContainer>
      <TopSection>
        <SectionContent>
          <TopSectionGrid>
            <ProfileImage
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/about/profile.jpg`}
                alt="Artem Svitelskyi"
              />
            </ProfileImage>
            <AboutContent
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title>About Me</Title>
              <Subtitle>
                I'm a Software Architect based in Europe, specializing in
                designing and implementing large-scale distributed systems and
                enterprise applications.
              </Subtitle>
              <Text>
                With over a decade of experience in software architecture and
                development, I've led the design and implementation of complex
                systems for enterprises and startups alike. My approach combines
                technical excellence with strategic thinking, ensuring scalable
                and maintainable solutions.
              </Text>
              <Text>
                I specialize in cloud-native architectures, microservices, and
                enterprise integration patterns. Whether it's architecting new
                systems or modernizing legacy applications, I'm passionate about
                creating robust solutions that drive business value.
              </Text>
            </AboutContent>
          </TopSectionGrid>
        </SectionContent>
      </TopSection>

      <Section>
        <SectionContent>
          <Title as="h2" $center>
            Skills & Expertise
          </Title>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillIcon
                  $gradientStart={skill.gradientStart}
                  $gradientEnd={skill.gradientEnd}
                >
                  {skill.icon}
                </SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SectionContent>
      </Section>
    </AboutContainer>
  );
};

export default About;
