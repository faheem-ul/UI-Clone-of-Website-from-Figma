import React from "react";

import { Box, Text, Heading, Icon, Flex } from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import CustomText from "../../Custom/CustomText";
import "./Header.css";

function Header() {
  return (
    <>
      <Flex
        width="100vw"
        height="40px"
        border="0px, 0px, 1px, 0px"
        bgColor="#3A0CA3"
        // justifyContent="space-around"
      >
        <Icon
          as={FontAwesomeIcon}
          icon={faLocationDot}
          color="white"
          width="12px"
          height="16px"
          mt="9px"
          ml="100px"
          border="1.2px"
        />
        <CustomText
          width="194px"
          height="9px"
          mt="6px"
          ml="6px"
          color="#FFFFFF"
        >
          Rezilla, 18 Grattan St, Brooklyn
        </CustomText>
        <PhoneIcon
          width="16px"
          height="16px"
          mt="12px"
          ml="815px"
          color="#FFFFFF"
        />
        <CustomText
          width="109px"
          height="9px"
          mt="9px"
          ml="6px"
          color="#FFFFFF"
        >
          +1 206-214-2298
        </CustomText>
        <EmailIcon
          width="16px"
          height="16px"
          mt="12px"
          ml="11px"
          border="1.2px"
          color="white"
        />
        <CustomText
          width="137px"
          height="9px"
          mt="9px"
          ml="6px"
          color="#FFFFFF"
          mr="100px"
        >
          Support@gmail.com
        </CustomText>
      </Flex>
      <Flex>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </>
  );
}

export default Header;
