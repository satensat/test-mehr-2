export default function FavoriteIcon({color,width,height}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width? width :"16"}
      height={height? height :"16"}
      viewBox= "0 0 16 16"
      fill="none"
    >
      <path
        d="M12.5334 6.60742C11.7801 6.60742 11.1068 6.97409 10.6868 7.53409C10.2668 6.97409 9.59345 6.60742 8.84011 6.60742C7.56678 6.60742 6.53345 7.64742 6.53345 8.92742C6.53345 9.42076 6.61345 9.88075 6.74678 10.3008C7.40011 12.3741 9.42678 13.6208 10.4268 13.9608C10.5668 14.0074 10.8001 14.0074 10.9401 13.9608C11.9401 13.6208 13.9668 12.3808 14.6201 10.3008C14.7601 9.87409 14.8334 9.42076 14.8334 8.92742C14.8401 7.64742 13.8068 6.60742 12.5334 6.60742Z"
        fill={color ? color :"#13625C"}
        // fill={fill}
      />
      <path
        d="M13.8333 5.55974C13.8333 5.71307 13.6799 5.81307 13.5333 5.77307C12.6333 5.53974 11.6466 5.73307 10.8999 6.26641C10.7533 6.37307 10.5533 6.37307 10.4133 6.26641C9.88659 5.87974 9.24659 5.66641 8.57325 5.66641C6.85325 5.66641 5.45325 7.07307 5.45325 8.80641C5.45325 10.6864 6.35325 12.0931 7.25992 13.0331C7.30659 13.0797 7.26659 13.1597 7.20659 13.1331C5.38659 12.5131 1.33325 9.93974 1.33325 5.55974C1.33325 3.62641 2.88659 2.06641 4.80659 2.06641C5.94659 2.06641 6.95325 2.61307 7.58659 3.45974C8.22659 2.61307 9.23325 2.06641 10.3666 2.06641C12.2799 2.06641 13.8333 3.62641 13.8333 5.55974Z"
        fill={color ? color :"#13625C"}
      />
    </svg>
  );
}