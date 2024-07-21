import React from "react";

const ListWrap = ({ children }: { children: React.ReactNode }) => {
  const len = 6;
  return (
    <ul
      className="relative space-y-4 overflow-hidden hover:overflow-auto"
      style={{ maxHeight: `${len! * 40 + 10}px` }}
    >
      {children}
    </ul>
  );
};

export default ListWrap;
