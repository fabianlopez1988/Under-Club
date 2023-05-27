import React from "react";
import {
  Flex,
  Box,
  keyframes,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import "./Loader.css"
import logo from "../../assets/UClogo.jpg"

const animationKeyframes = keyframes`
    0% { transform: scale(0.5) rotate(0); }
    20% { transform: scale(1) rotate(0);  }
    40% { transform: scale(1.2) rotate(270deg); }
    60% { transform: scale(1.4) rotate(270deg);  }
    80% { transform: scale(2) rotate(0);  }
    100% { transform: scale(0) rotate(0);  }
  `;
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const text= "UNDER CLUB"
const animation = `${animationKeyframes} 6s ease-in-out`;
const Loader = () => {
  
  return (
    <Flex
      h="50vh"
      bg="black"
      justifyContent="center"
      alignItems="center"
      p={0}
      m={0}
    >
      <Box
        as={motion.div}
        animation={animation}
        initial={{ y: "50%", opacity: 0, scale: 2.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "70%", opacity: 0 }}
      >
        <Box className="" h="20px" w="20px">
          <ChakraBox
            as={motion.h2}
            animate={{
              scale: [1, 1.05, 1.1, 1.15, 1.3],
              rotate: [-45, -45, -235, -45, -45],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }}
            color="white"
            fontSize="40px"
            fontWeight="extrabold"
            className="sf"
          >
            {text}
          </ChakraBox>
        </Box>
      </Box>
    </Flex>
  );
};

export default Loader;