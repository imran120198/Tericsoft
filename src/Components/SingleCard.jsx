import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export const SingleCard = ({ tabNameData, tabName }) => {
  return (
    <Box h={"500px"}>
      <Image h="100%" w="100%" src={tabNameData.image} alt=""/>
      <Box mt="-120px">
        <Text textAlign="left" fontSize="25px" pl="6px" color={"white"}>
          Day {tabNameData.day} {tabName}
        </Text>
        <Flex justifyContent="space-around" w="60%" opacity="0.5" mt="5px">
          <Text bg="black" color="white" p="3px 10px" rounded={"md"}>
            {tabNameData.level}
          </Text>
          <Text bg={"black"} color="white" p="3px 10px" rounded={"md"}>
            {tabNameData.footage}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
