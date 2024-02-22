import React from "react";

import { Text } from "@chakra-ui/react";

function CustomText({ children, ...rest }) {
  return (
    <div>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        lineHeight="22px"
        letterSpacing="0em"
        // text-align="right"
        {...rest}
      >
        {children}
      </Text>
    </div>
  );
}

export default CustomText;
