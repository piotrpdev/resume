// eslint-disable-next-line no-unused-vars
import React from "react";

export default function ContactIconWrapper({ href, icon, text }) {
  return (
    <a className="contactIconWrapper" href={href}><span className="contactIconWrapperIcon">{icon}</span>{text}</a>
  )
}
