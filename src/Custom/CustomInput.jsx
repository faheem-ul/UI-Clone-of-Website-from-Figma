import React from "react";
import { Input } from "@chakra-ui/input";

function CustomInput({ children, ...props }) {
  return (
    <div>
      <Input
        type="text"
        width="340px"
        height="59px"
        borderRadius="20px"
        bgColor="rgba(212, 212, 212, 0.2)"
        border="1px solid rgba(212, 212, 212, 1)"
        textColor="rgba(212, 212, 212, 1)"
        {...props}
      >
        {children}
      </Input>
    </div>
  );
}

export default CustomInput;
