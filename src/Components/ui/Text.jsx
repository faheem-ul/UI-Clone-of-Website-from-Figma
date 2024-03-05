import { Text } from "@chakra-ui/react";

function CustomText({ ...rest }) {
  return (
    <Text
      fontFamily="Poppins"
      fontSize="13px"
      fontWeight="400"
      lineHeight="22px"
      letterSpacing="0em"
      {...rest}
    ></Text>
  );
}

export default CustomText;
