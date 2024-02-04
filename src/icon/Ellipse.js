export default function EllipseIcon({color,width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 16 16"
      fill="none"
    >
      <circle cx="8" cy="8" r="8" fill={color ? color :"#13625C"} />
    </svg>
  );
}
