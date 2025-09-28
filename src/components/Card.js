import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="xl">
      <Image src={imageSrc} width="100%" borderRadius="xl"/>
      <VStack alignItems="left" p="5" pt="0">
        <Heading color="black" size="md" py="2">{title}</Heading>
        <Text color="grey" pb="2">{description}</Text>
        <HStack>
          <Text color="black" fontWeight="600">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
