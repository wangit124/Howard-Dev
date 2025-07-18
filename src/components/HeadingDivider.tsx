"use client";

import React from "react";
import Text from "./Text";
import Flex from "./Flex";

type Props = {
  text: string;
};

const HeadingDivider: React.FC<Props> = ({ text }) => {
  return (
    <Flex items="center" className="w-full">
      <Text size="h3" className="text-white font-bold">
        {text}
      </Text>
      <div className="ml-2 flex flex-1 h-[2px] bg-white" />
    </Flex>
  );
};

export default HeadingDivider;
