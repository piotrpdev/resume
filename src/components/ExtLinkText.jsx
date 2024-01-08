// eslint-disable-next-line no-unused-vars
import React from "react";
import ExtLink from "./icons/ExtLink";

export default function ExtLinkText({ text, href }) {
  return (
    <a target="_blank" href={href} rel="noopener noreferrer">
      <span>{text}</span>
      <ExtLink />
    </a>
  );
}
