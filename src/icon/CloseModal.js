export default function CloseModal({ color, width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "25"}
      height={height ? height : "24"}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81V16.18C2.5 19.83 4.67 22 8.31 22H16.68C20.32 22 22.49 19.83 22.49 16.19V7.81C22.5 4.17 20.33 2 16.69 2ZM15.86 14.3C16.15 14.59 16.15 15.07 15.86 15.36C15.71 15.51 15.52 15.58 15.33 15.58C15.14 15.58 14.95 15.51 14.8 15.36L12.5 13.06L10.2 15.36C10.05 15.51 9.86 15.58 9.67 15.58C9.48 15.58 9.29 15.51 9.14 15.36C8.85 15.07 8.85 14.59 9.14 14.3L11.44 12L9.14 9.7C8.85 9.41 8.85 8.93 9.14 8.64C9.43 8.35 9.91 8.35 10.2 8.64L12.5 10.94L14.8 8.64C15.09 8.35 15.57 8.35 15.86 8.64C16.15 8.93 16.15 9.41 15.86 9.7L13.56 12L15.86 14.3Z"
        fill={color ? color : "#3B3B3B"}
      />
    </svg>
  );
}
