export default function ArrowDownIcon({width,height,color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "16"}
      height={height ? height : "16"}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M11.9465 5.45312H7.79316H4.05317C3.41317 5.45312 3.09317 6.22646 3.5465 6.67979L6.99983 10.1331C7.55317 10.6865 8.45317 10.6865 9.0065 10.1331L10.3198 8.81979L12.4598 6.67979C12.9065 6.22646 12.5865 5.45312 11.9465 5.45312Z"

        fill={color ? color : "#525252"}
      />
    </svg>
  );
}
  