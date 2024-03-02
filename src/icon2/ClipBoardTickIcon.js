import React from "react";

export default function ClipBoardTickIcon({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14.3498 2H9.64977C8.60977 2 7.75977 2.84 7.75977 3.88V4.82C7.75977 5.86 8.59977 6.7 9.63977 6.7H14.3498C15.3898 6.7 16.2298 5.86 16.2298 4.82V3.88C16.2398 2.84 15.3898 2 14.3498 2Z"
        fill={color ? color : "#13625C"}
      />
      <path
        d="M17.24 4.8234C17.24 6.4134 15.94 7.7134 14.35 7.7134H9.65004C8.06004 7.7134 6.76004 6.4134 6.76004 4.8234C6.76004 4.2634 6.16004 3.9134 5.66004 4.1734C4.25004 4.9234 3.29004 6.4134 3.29004 8.1234V17.5334C3.29004 19.9934 5.30004 22.0034 7.76004 22.0034H16.24C18.7 22.0034 20.71 19.9934 20.71 17.5334V8.1234C20.71 6.4134 19.75 4.9234 18.34 4.1734C17.84 3.9134 17.24 4.2634 17.24 4.8234ZM15.34 12.7334L11.34 16.7334C11.19 16.8834 11 16.9534 10.81 16.9534C10.62 16.9534 10.43 16.8834 10.28 16.7334L8.78004 15.2334C8.49004 14.9434 8.49004 14.4634 8.78004 14.1734C9.07004 13.8834 9.55004 13.8834 9.84004 14.1734L10.81 15.1434L14.28 11.6734C14.57 11.3834 15.05 11.3834 15.34 11.6734C15.63 11.9634 15.63 12.4434 15.34 12.7334Z"
        fill={color ? color : "#13625C"}
      />
    </svg>
  );
}
