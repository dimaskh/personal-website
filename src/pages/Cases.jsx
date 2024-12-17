import styled from 'styled-components'
import { motion } from 'framer-motion'

const CasesContainer = styled.div`
  min-height: 100vh;
  padding: ${props => props.theme.spacing.xl};
  padding-top: calc(80px + ${props => props.theme.spacing.xl});
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
`

const ProjectCard = styled(motion.article)`
  background: ${props => props.theme.colors.lightGray};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${props => props.theme.colors.secondary};
  background-image: url(${props => `${import.meta.env.BASE_URL}${props.image.replace(/^\//, '')}`});
  background-size: cover;
  background-position: center;
`

const ProjectContent = styled.div`
  padding: ${props => props.theme.spacing.lg};

  h2 {
    font-size: 1.5rem;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.primary};
  }

  p {
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  .tags {
    display: flex;
    gap: ${props => props.theme.spacing.sm};
    flex-wrap: wrap;
  }
`

const Tag = styled.span`
  background: ${props => props.theme.colors.accent};
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
`

const Cases = () => {
  const projects = [
    {
      title: "Codeium AI - Developer Tool",
      description: "Designed and developed key features for an AI-powered code completion tool, focusing on user experience and developer productivity.",
      tags: ["Product Design", "Developer Tools", "AI/ML", "React"],
      image: "images/projects/codeium.jpg"
    },
    {
      title: "Windsurf IDE - Code Editor",
      description: "Led the design of a next-generation code editor with AI capabilities, creating an intuitive and powerful development environment.",
      tags: ["UI/UX", "Developer Tools", "Electron", "React"],
      image: "images/projects/windsurf.jpg"
    },
    {
      title: "Anthropic Claude - AI Assistant",
      description: "Contributed to the design of conversational interfaces and developer tools for an advanced AI assistant platform.",
      tags: ["AI/ML", "UI Design", "Developer Experience"],
      image: "images/projects/claude.jpg"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing UX design work and development projects, built with React and modern animation libraries.",
      tags: ["Web Design", "React", "Framer Motion"],
      image: "images/projects/portfolio.jpg"
    },
    {
      title: "Tesla Mobile App Concept",
      description: "Redesigned concept for Tesla's mobile app, focusing on improved vehicle control and charging management features.",
      tags: ["Mobile Design", "UI/UX", "Automotive"],
      image: "images/projects/tesla.jpg"
    },
    {
      title: "Banking Dashboard",
      description: "Modern financial management dashboard with real-time analytics, transaction monitoring, and intuitive data visualization.",
      tags: ["FinTech", "Dashboard Design", "Data Viz"],
      image: "images/projects/banking.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <CasesContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>Cases</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={itemVariants}
            >
              <ProjectImage image={project.image} />
              <ProjectContent>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </div>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </CasesContainer>
  )
}

export default Cases
