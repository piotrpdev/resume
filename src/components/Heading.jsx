// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Heading({ children, className = "heading", aside = "", href = "" }) {
  return (
    <div className={className}>
      <div>
        <div>
          <div>
            <div className="main">
              {href === "" ? (
                <a>{children}</a>
              ) : (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              )}
            </div>
            <div className="aside">
              {
                aside !== "" ? (
                  <span>{aside}</span>
                ) : (
                  <></>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
