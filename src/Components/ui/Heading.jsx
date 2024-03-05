import { Heading } from "@chakra-ui/react";

function CustomHeading({ ...rest }) {
  return (
    <Heading
      fontFamily="Poppins"
      fontSize="57px"
      fontWeight="600"
      lineHeight="65px"
      letterSpacing="0em"
      {...rest}
    ></Heading>
  );
}

export default CustomHeading;
