import emailjs from "@emailjs/browser";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: ${(props) => props.theme.spacing.xl};
  padding-top: calc(80px + ${(props) => props.theme.spacing.xl});
  max-width: 1400px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing["2xl"]};
  margin-bottom: ${(props) => props.theme.spacing["3xl"]};

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.backgroundAlt};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.shadows.lg};
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.primary};
`;

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.accent};
    box-shadow: 0 0 0 3px ${(props) => props.theme.colors.accent}33;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const TextArea = styled(Input).attrs({ as: "textarea" })`
  min-height: 150px;
  resize: vertical;
`;

const Button = styled(motion.button)`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  background: ${(props) => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${(props) => props.theme.colors.accent}66;
  }
`;

const FormMessage = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: 0.9rem;
  margin-top: ${(props) => props.theme.spacing.md};

  ${(props) =>
    props.type === "success" &&
    `
    background: ${props.theme.colors.success}22;
    color: ${props.theme.colors.success};
  `}

  ${(props) =>
    props.type === "error" &&
    `
    background: ${props.theme.colors.error}22;
    color: ${props.theme.colors.error};
  `}
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
  background: ${(props) => props.theme.colors.backgroundAlt};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  box-shadow: ${(props) => props.theme.shadows.lg};
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.primary};
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textSecondary};

  svg {
    width: 24px;
    color: ${(props) => props.theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  transition: all 0.3s ease;

  svg {
    width: 24px;
    color: ${(props) => props.theme.colors.accent};
  }

  &:hover {
    color: ${(props) => props.theme.colors.accent};
    transform: translateX(4px);
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: ${(props) => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.lg};
  background: ${(props) => props.theme.colors.backgroundAlt};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 1;
  }
`;

const MapOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
`;

const LocationPin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.colors.accent};
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setMessage({
          type: "success",
          text: "Thank you for your message! I will get back to you soon.",
        });
        formRef.current.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Sorry, something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I'm open to discussing software architecture, technical solutions, and
        potential collaboration opportunities.
      </Subtitle>

      <ContentWrapper>
        <ContactForm
          ref={formRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          <FormTitle>Send Me a Message</FormTitle>
          <Input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <Input type="text" name="subject" placeholder="Subject" required />
          <TextArea name="message" placeholder="Your Message" required />
          <Button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          {message && (
            <FormMessage type={message.type}>{message.text}</FormMessage>
          )}
        </ContactForm>

        <ContactInfo
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <InfoTitle>Contact Information</InfoTitle>

          <InfoItem>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Wrocław, Poland</span>
          </InfoItem>

          <SocialLinks>
            <SocialLink
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </SocialLink>

            <SocialLink
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </SocialLink>

            <SocialLink
              href="mailto:your.email@example.com"
              whileHover={{ x: 4 }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </SocialLink>
          </SocialLinks>

          <InfoItem>
            <FontAwesomeIcon icon={faClock} />
            <span>Available: 9:00 - 17:00 CET</span>
          </InfoItem>
        </ContactInfo>
      </ContentWrapper>

      {/* <MapContainer>
        <img
          src={`${import.meta.env.BASE_URL}images/map.png`}
          alt="Wrocław, Poland Location Map"
        />
        <MapOverlay />
        <LocationPin>
          <FontAwesomeIcon icon={faLocationDot} />
        </LocationPin>
      </MapContainer> */}
    </ContactContainer>
  );
};

export default Contact;
