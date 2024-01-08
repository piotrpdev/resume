// eslint-disable-next-line no-unused-vars
import React from "react";
import ExtLink from "./icons/ExtLink";

export default function HeadingSubtitle({ children, linkIcon = true }) {
  return (
    <span className="headingSubtitle">
      <span className="headingSubtitle">
        {children}
        {
          linkIcon ? <ExtLink /> : null
        }
      </span>
    </span>
  );
}
