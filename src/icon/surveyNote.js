export default function SurveyIcon({ height, width, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "72"}
      height={height ? height : "72"}
      viewBox="0 0 72 72"
      fill="none"
    >
      <path
        d="M48 12.75C48 16.47 44.97 19.5 41.25 19.5H30.75C28.89 19.5 27.21 18.75 25.98 17.52C24.75 16.29 24 14.61 24 12.75C24 9.03 27.03 6 30.75 6H41.25C43.11 6 44.79 6.75 46.02 7.98C47.25 9.21 48 10.89 48 12.75Z"
        fill={color ? color : "white"}
      />
      <path
        d="M56.49 15.0901C55.8 14.5201 55.02 14.0701 54.18 13.7401C53.31 13.4101 52.44 14.1001 52.26 15.0001C51.24 20.1301 46.71 24.0001 41.25 24.0001H30.75C27.75 24.0001 24.93 22.8301 22.8 20.7001C21.24 19.1401 20.16 17.1601 19.74 15.0301C19.56 14.1301 18.66 13.4101 17.79 13.7701C14.31 15.1801 12 18.3601 12 24.7501V54.0001C12 63.0001 17.37 66.0001 24 66.0001H48C54.63 66.0001 60 63.0001 60 54.0001V24.7501C60 19.8601 58.65 16.8601 56.49 15.0901ZM24 36.7501H36C37.23 36.7501 38.25 37.7701 38.25 39.0001C38.25 40.2301 37.23 41.2501 36 41.2501H24C22.77 41.2501 21.75 40.2301 21.75 39.0001C21.75 37.7701 22.77 36.7501 24 36.7501ZM48 53.2501H24C22.77 53.2501 21.75 52.2301 21.75 51.0001C21.75 49.7701 22.77 48.7501 24 48.7501H48C49.23 48.7501 50.25 49.7701 50.25 51.0001C50.25 52.2301 49.23 53.2501 48 53.2501Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
}
