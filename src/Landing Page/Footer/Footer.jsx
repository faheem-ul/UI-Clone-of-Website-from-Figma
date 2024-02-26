import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseSignal } from "@fortawesome/free-solid-svg-icons";

import CustomText from "../../Custom/CustomText";
import CustomHeading from "../../Custom/CustomHeading";

import userOctagone from "../../assets/Pictures/userOctagon.jpg";
import footerImage1 from "../../assets/Pictures/FooterImages/Rectangle14.png";
import footerImage2 from "../../assets/Pictures/FooterImages/Rectangle15.png";
import footerImage3 from "../../assets/Pictures/FooterImages/Rectangle16.png";

function Footer() {
  return (
    <>
      <Flex justifyContent="center" gap="100px">
        <Box>
          <Box mt="200px">
            <CustomText
              color="rgba(67, 97, 238, 1)"
              fontWeight="500"
              fontSize="20px"
              letterSpacing="5px"
            >
              WHO ARE WE
            </CustomText>
            <CustomHeading fontSize="40px" width="500px">
              Assisting individuals in locating the appropriate real estate.
            </CustomHeading>
            <CustomText width="500px">
              Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
              dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
              malesuada leo volutpat.
            </CustomText>
          </Box>

          <Flex
            width="400px"
            height="131px"
            mb="40px"
            bgColor="rgba(255, 255, 255, 1)"
            justifyContent="center"
            alignItems="center"
            gap="50px"
            borderRadius="30px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <Icon
              as={FontAwesomeIcon}
              icon={faHouseSignal}
              color="rgba(67, 97, 238, 1)"
              width="40px"
              height="40px"
            ></Icon>
            <Box>
              <CustomText
                color="rgba(67, 97, 238, 1)"
                fontWeight="500"
                fontSize="20px"
              >
                Donec porttitor euismod
              </CustomText>
              <CustomText color="rgba(128, 128, 128, 1)" width="274px">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </CustomText>
            </Box>
          </Flex>
          <Flex
            width="400px"
            height="131px"
            bgColor="rgba(255, 255, 255, 1)"
            justifyContent="center"
            alignItems="center"
            gap="50px"
            borderRadius="30px"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
          >
            <img src={userOctagone} alt="user octagone image" />
            <Box>
              <CustomText
                color="rgba(67, 97, 238, 1)"
                fontWeight="500"
                fontSize="20px"
              >
                Donec porttitor euismod
              </CustomText>
              <CustomText color="rgba(128, 128, 128, 1)" width="274px">
                Nullam a lacinia ipsum, nec dignissim purus. Nulla
              </CustomText>
            </Box>
          </Flex>
        </Box>
        <Box mt="200px">
          <Flex>
            <img
              src={footerImage1}
              alt="first footer image"
              style={{ width: "280px", height: "500px", borderRadius: "30px" }}
            />
            <Box>
              <img
                src={footerImage2}
                alt="second footer image"
                style={{
                  width: "277px",
                  height: "280px",
                  borderRadius: "30px",
                }}
              />
              <img
                src={footerImage3}
                alt="3rd footer image"
                style={{
                  width: "277px",
                  height: "180px",

                  borderRadius: "30px",
                }}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Footer;
