import React from "react";

import { Box, Flex, position } from "@chakra-ui/react";

import CustomText from "../../Custom/CustomText";
import CustomHeading from "../../Custom/CustomHeading";
import CustomSlider from "../../Custom/CustomSlider/CustomSlider";
import CustomInput from "../../Custom/CustomInput";
import CustomButton from "../../Custom/CustomButton";

import client1 from "../../assets/Pictures/ClientsPics/client1.jpg";
import client2 from "../../assets/Pictures/ClientsPics/client2.png";
import client3 from "../../assets/Pictures/ClientsPics/client3.jpg";
import client4 from "../../assets/Pictures/ClientsPics/client4.jpg";
import client5 from "../../assets/Pictures/ClientsPics/client5.jpg";
import client6 from "../../assets/Pictures/ClientsPics/client6.jpg";
import newlisting from "../../assets/Pictures/newListing.jpg";
const Clients = [client6, client5, client4, client3, client2, client1];

function TopSection() {
  return (
    <>
      <Flex
        // justify="space-between"
        w="100%"
        h="100%"
        height="902px"
        borderRadius="0px 0px 800px 800px"
        bg="linear-gradient(to bottom, rgba(76, 201, 240, 0) 0%, rgba(67, 97, 238, 0.3)
     100%)"
      >
        <Flex direction="column">
          <CustomText
            fontSize="19.4px"
            pt="80px"
            ml="161px"
            color="rgba(67, 97, 238, 1)"
          >
            REAL ESTATE
          </CustomText>
          <CustomHeading
            width="480px"
            height="105px"
            ml="160px"
            fontSize="57.3px"
            mt="40px"
          >
            Find a perfect home you love..!
          </CustomHeading>
          <CustomText
            width="580px"
            height="37px"
            mt="80px"
            ml="160px"
            fontWeight="400"
            fontSize="16px"
          >
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </CustomText>
          <CustomSlider />
          <Flex
            mt="50px"
            // ml="350px"
            gap="0px"
          >
            <Flex
              width="360px"
              height="100px"
              borderRadius="50px"
              bgColor="rgba(255, 255, 255, 1)"
            >
              <Flex alignItems="center">
                {Clients.map((client, index) => {
                  return (
                    <img
                      style={{
                        position: "relative",
                        left: `${(Clients.length - index - 1) * 10}px`,
                        borderRadius: "50px",
                      }}
                      key={index}
                      src={client}
                      alt="this is the client image"
                    />
                  );
                })}
                <Box>
                  <CustomHeading
                    fontSize="19.4px"
                    fontWeight="500"
                    lineHeight="29px"
                    // ml="5px"
                  >
                    72k+ Happy Customers
                  </CustomHeading>
                </Box>
              </Flex>
            </Flex>
            <Flex
              width="360px"
              height="100px"
              borderRadius="50px"
              bgColor="rgba(255, 255, 255, 1)"
              justifyContent="center"
            >
              <Flex justifyContent="baseline" alignItems="center" gap="10px">
                <Box
                  // width="60px"
                  height="60px"
                  borderRadius="50px"
                >
                  <img src={newlisting} alt="new listing building image" />
                </Box>
                <Box width="181px" height="43px">
                  <CustomHeading
                    fontSize="19.4px"
                    fontWeight="500"
                    lineHeight="29px"
                  >
                    200+ New Listings Everyday!
                  </CustomHeading>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width="420px"
          height="582px"
          bgColor="rgba(255, 255, 255, 1)"
          mt="171px"
          mr="150px"
          borderRadius="20px 20px 20px 20px"
          justifyContent="center"
        >
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
          >
            <CustomText
              color="rgba(58, 12, 163, 1)"
              fontWeight="600"
              fontSize="16px"
            >
              Contact Us Now
            </CustomText>
            <Box
              padding="0px 20px"
              width="340px"
              bgColor="rgba(58, 12, 163, 1)"
              border="1px solid"
            ></Box>
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Email" />
            <CustomInput
              placeholder="Message"
              type="textarea"
              width="340px"
              height="134px"
            />
            <CustomButton
              bgColor="rgba(58, 12, 163, 1);"
              color="white"
              borderRadius="50px"
              width="340px"
            >
              Submit
            </CustomButton>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default TopSection;
