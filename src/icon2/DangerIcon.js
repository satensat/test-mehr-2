import React from "react";

export default function DangerIcon({ height, width, color }) {
  return (
    <svg
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5067 10.6159L10.24 2.93594C9.66665 1.9026 8.87332 1.33594 7.99998 1.33594C7.12665 1.33594 6.33332 1.9026 5.75998 2.93594L1.49332 10.6159C0.953318 11.5959 0.893318 12.5359 1.32665 13.2759C1.75999 14.0159 2.61332 14.4226 3.73332 14.4226H12.2667C13.3867 14.4226 14.24 14.0159 14.6733 13.2759C15.1067 12.5359 15.0467 11.5893 14.5067 10.6159ZM7.49998 6.0026C7.49998 5.72927 7.72665 5.5026 7.99998 5.5026C8.27332 5.5026 8.49998 5.72927 8.49998 6.0026V9.33594C8.49998 9.60927 8.27332 9.83594 7.99998 9.83594C7.72665 9.83594 7.49998 9.60927 7.49998 9.33594V6.0026ZM8.47332 11.8093C8.43998 11.8359 8.40665 11.8626 8.37332 11.8893C8.33332 11.9159 8.29332 11.9359 8.25332 11.9493C8.21332 11.9693 8.17332 11.9826 8.12665 11.9893C8.08665 11.9959 8.03998 12.0026 7.99998 12.0026C7.95998 12.0026 7.91332 11.9959 7.86665 11.9893C7.82665 11.9826 7.78665 11.9693 7.74665 11.9493C7.70665 11.9359 7.66665 11.9159 7.62665 11.8893C7.59332 11.8626 7.55998 11.8359 7.52665 11.8093C7.40665 11.6826 7.33332 11.5093 7.33332 11.3359C7.33332 11.1626 7.40665 10.9893 7.52665 10.8626C7.55998 10.8359 7.59332 10.8093 7.62665 10.7826C7.66665 10.7559 7.70665 10.7359 7.74665 10.7226C7.78665 10.7026 7.82665 10.6893 7.86665 10.6826C7.95332 10.6626 8.04665 10.6626 8.12665 10.6826C8.17332 10.6893 8.21332 10.7026 8.25332 10.7226C8.29332 10.7359 8.33332 10.7559 8.37332 10.7826C8.40665 10.8093 8.43998 10.8359 8.47332 10.8626C8.59332 10.9893 8.66665 11.1626 8.66665 11.3359C8.66665 11.5093 8.59332 11.6826 8.47332 11.8093Z"
        fill={color ? color : "#DF2040"}
      />
    </svg>
  );
}