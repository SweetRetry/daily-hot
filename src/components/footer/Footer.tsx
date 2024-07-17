import dayjs from "dayjs";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 text-center">
      Copyright© {dayjs().get("year")} SweetRetry
    </footer>
  );
};

export default Footer;
