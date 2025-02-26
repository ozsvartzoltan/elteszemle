import React from "react";

export default function SVG({
  type,
  size = 20,
  width = 20,
  height = 20,
  fill = "currentColor",
  ...props
}) {
  if (type === "bulletSeparator") {
    return (
      <svg
        width="6"
        height="6"
        viewBox="0 0 6 6"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <circle cx="3" cy="3" r="3" />
      </svg>
    );
  }

  if (type === "chevron") {
    return (
      <svg
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.5}
        />
      </svg>
    );
  }

  return null; // Return nothing if type is invalid
}
