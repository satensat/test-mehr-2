import React from "react";

export default function IconTick({color,width,height}) {
  return (
    <svg
   
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 1.33594C4.32683 1.33594 1.3335 4.32927 1.3335 8.0026C1.3335 11.6759 4.32683 14.6693 8.00016 14.6693C11.6735 14.6693 14.6668 11.6759 14.6668 8.0026C14.6668 4.32927 11.6735 1.33594 8.00016 1.33594ZM11.1868 6.46927L7.40683 10.2493C7.3135 10.3426 7.18683 10.3959 7.0535 10.3959C6.92016 10.3959 6.7935 10.3426 6.70016 10.2493L4.8135 8.3626C4.62016 8.16927 4.62016 7.84927 4.8135 7.65594C5.00683 7.4626 5.32683 7.4626 5.52016 7.65594L7.0535 9.18927L10.4802 5.7626C10.6735 5.56927 10.9935 5.56927 11.1868 5.7626C11.3802 5.95594 11.3802 6.26927 11.1868 6.46927Z"
        fill={color ?color :"#1B887F"}
      />
    </svg>
  );
}
