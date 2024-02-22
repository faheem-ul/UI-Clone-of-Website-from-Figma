import React from "react";
import { Box, Button, Flex, Heading, Icon } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../../Custom/CustomButton";
import CustomText from "../../Custom/CustomText";
import CustomHeading from "../../Custom/CustomHeading";

function Navbar() {
  return (
    <>
      <Flex gap="200px" justifyContent="center">
        <Flex
          // width="1440px"
          height="80px"
          mt="61px"
          //   ml="100px"
          gap="20px"
        >
          <CustomButton>
            <CustomText color="rgba(43, 43, 43, 1)">Home</CustomText>
          </CustomButton>
          <CustomButton>
            <CustomText color="rgba(43, 43, 43, 1)">About</CustomText>
          </CustomButton>
          <CustomButton>
            <CustomText color="rgba(43, 43, 43, 1)">Listing</CustomText>
          </CustomButton>
          <CustomButton>
            <CustomText color="rgba(43, 43, 43, 1)">Services</CustomText>
          </CustomButton>
          <CustomButton>
            <CustomText color="rgba(43, 43, 43, 1)">Blogs</CustomText>
          </CustomButton>
        </Flex>

        <Flex gap="5px">
          <Box
            width="50px"
            height="50px"
            mt="51px"
            // left="658px"
            bgColor="rgba(58, 12, 163, 1)"
            borderRadius="100px"
          >
            <Icon
              as={FontAwesomeIcon}
              icon={faHouse}
              width="24px"
              height="24px"
              mt="11px"
              ml="12px"
              padding="0px, 0px, 0px, 0p"
            />
          </Box>
          <CustomHeading mt="47px">Rezilla</CustomHeading>
        </Flex>

        <Flex gap="20px">
          <Box
            // width="117px"
            // height="11px"
            mt="46px"

            // left: 1034px
          >
            <CustomHeading size="larger" fontWeight="400">
              Login/Register
            </CustomHeading>
          </Box>

          <Button
            width="169px"
            height="50px"
            mt="51px"
            bgColor="rgba(58, 12, 163, 1)"
            _hover="rgba(58, 12, 163, 1)"
            // left: 1171px
            padding="15px, 26px, 15px, 26px"
            borderRadius="50px"
            // gap: 10px
          >
            <Icon
              as={FontAwesomeIcon}
              icon={faHouse}
              width="24px"
              height="24px"
              mb="7px"
              padding="0px, 0px, 0px, 0p"
            />
            Add Listing
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
