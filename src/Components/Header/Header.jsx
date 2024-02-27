import React from "react";

import { Box, Flex, Icon } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import CustomText from "../Custom Components/CustomText";

function Header() {
  return (
    <>
      <Box bgColor="rgba(58, 12, 163, 1)">
        <Flex
          justifyContent="space-between"
          ml="100px"
          mr="100px"
          // padding="8px"
        >
          <Flex alignItems="center" gap="5px">
            <Box>
              <Icon
                as={FontAwesomeIcon}
                icon={faLocationDot}
                color="white"
                width="12px"
                height="16px"
              />
            </Box>
            <CustomText color="#FFFFFF">
              Rezilla, 18 Grattan St, Brooklyn
            </CustomText>
          </Flex>
          <Flex gap="12px">
            <Flex alignItems="center" gap="5px">
              <Box>
                <Icon
                  as={FontAwesomeIcon}
                  icon={faPhone}
                  color="white"
                  width="12px"
                  height="16px"
                />
              </Box>
              <CustomText color="#FFFFFF">+1 206-214-2298</CustomText>
            </Flex>

            <Flex alignItems="center" gap="5px">
              <Box>
                <Icon
                  as={FontAwesomeIcon}
                  icon={faEnvelope}
                  color="white"
                  width="12px"
                  height="16px"
                />
              </Box>
              <CustomText color="#FFFFFF">support@rezilla.com</CustomText>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
