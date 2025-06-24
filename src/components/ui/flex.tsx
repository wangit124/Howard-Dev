import React from "react";

type Props = {
  className?: string;
  justify?: string;
  align?: string;
  children: React.ReactNode;
};

const Flex: React.FC<Props> = ({ className, justify, align, children }) => {
  return (
    <div className={`flex justify-${justify} align-${align} ${className}`}>
      {children}
    </div>
  );
};

export default Flex;
