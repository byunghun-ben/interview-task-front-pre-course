import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const CheckIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8483 5.65152C21.317 6.12015 21.317 6.87995 20.8483 7.34858L9.84834 18.3486C9.37972 18.8172 8.61992 18.8172 8.15129 18.3486L3.65128 13.8486C3.18265 13.3799 3.18265 12.6202 3.65128 12.1515C4.1199 11.6829 4.8797 11.6829 5.34833 12.1515L8.99981 15.803L19.1513 5.65152C19.6199 5.18289 20.3797 5.18289 20.8483 5.65152Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckIcon;
