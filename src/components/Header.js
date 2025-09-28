import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const ref = useRef();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > ref.current) {
        setValue(-200);
      }
      if (window.scrollY < ref.current) {
        setValue(0);
      }
      ref.current = window.scrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (anchor === "projects") {
      window.location.hash = "projects";
    } else if (anchor === "contactme") {
      window.location.hash = "contact-me";
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={`translateY(${value}px)`}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              <HStack spacing={8}>
                {
                  socials.map((social) => {
                    return <a key={social.url} href={social.url}><FontAwesomeIcon icon={social.icon} size="2x"></FontAwesomeIcon></a>;
                  })
                }
              </HStack>
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              <a key={ "projects-section" } href="#projects-section" onClick={handleClick("projects")}>Projects</a>
              <a key={ "contactme-section" } href="#contactme-section"  onClick={handleClick("contactme")}>Contact Me</a> 
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
