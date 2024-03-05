import { Avatar, AvatarGroup, Box, Flex } from "@chakra-ui/react";

import CustomHeading from "@/components/ui/Heading";

import newlisting from "../../../assets/Pictures/newListing.jpg";

function HeroAvatars() {
  return (
    <article>
      <Flex
        position="relative"
        top={{ base: "255px", md: "45px", xl: "45px" }}
        direction={{ base: "column", md: "row", xl: "row" }}
        alignItems="center"
        gap="25px"
        justifyContent="center"
      >
        <Box
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          width={{ base: "333px", md: "350px", xl: "350px" }}
        >
          <Flex
            alignItems="center"
            pl="20px"
            pr="20px"
            height="100px"
            bgColor="rgba(255, 255, 255, 1)"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            borderRadius="50px"
          >
            <AvatarGroup size="md" zIndex="6">
              <Avatar
                zIndex="1"
                name="Ryan Florence"
                src="https://bit.ly/ryan-florence"
              />
              <Avatar
                zIndex="2"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Avatar
                zIndex="3"
                name="Kent Dodds"
                src="https://bit.ly/kent-c-dodds"
              />
              <Avatar
                zIndex="4"
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              <Avatar
                zIndex="5"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
            </AvatarGroup>
            <CustomHeading
              fontSize={{ base: "16px", md: "19.4px", xl: "19.4px" }}
              fontWeight="500"
              textAlign="center"
              lineHeight={{ base: "29px", md: "24px", xl: "24px" }}
              width={{ base: "112px", md: "122px", xl: "122px" }}
            >
              72k+ Happy Customers
            </CustomHeading>
          </Flex>
        </Box>

        <Box
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          width={{ base: "333px", md: "350px", xl: "350px" }}
        >
          <Flex
            justifyContent="center"
            gap="20px"
            direction="row"
            alignItems="center"
            height="100px"
            bgColor="rgba(255, 255, 255, 1)"
            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
            borderRadius="50px"
          >
            <img src={newlisting} alt="new listing building image" />
            <CustomHeading
              fontSize={{ base: "16px", md: "19.4px", xl: "19.4px" }}
              fontWeight="500"
              lineHeight={{ base: "29px", md: "24px", xl: "24px" }}
              width={{ base: "144px", md: "174px", xl: "174px" }}
            >
              200+ New Listings Everyday!
            </CustomHeading>
          </Flex>
        </Box>
      </Flex>
      {/* </Box> */}
    </article>
  );
}

export default HeroAvatars;
