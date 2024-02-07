import React from "react";

export default function EmpthyTick({color,width,height}) {
  return (
    <svg
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7799 9.69937L11.1099 15.3694C10.9699 15.5094 10.7799 15.5894 10.5799 15.5894C10.3799 15.5894 10.1899 15.5094 10.0499 15.3694L7.21994 12.5394C6.92994 12.2494 6.92994 11.7694 7.21994 11.4794C7.50994 11.1894 7.98994 11.1894 8.27994 11.4794L10.5799 13.7794L15.7199 8.63938C16.0099 8.34938 16.4899 8.34938 16.7799 8.63938C17.0699 8.92937 17.0699 9.39937 16.7799 9.69937Z"
        fill={color ?color :"black"}
      />
    </svg>
  );
}
