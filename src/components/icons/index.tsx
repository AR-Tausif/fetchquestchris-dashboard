export * from "./user-off"
interface IconProps {
  size?: string;
}
export const MapDotIcon = ({ size }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
    </svg>
  );
};
export const BlogIcon = ({ ...props }) => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
      <path fill="#010101" d="M19 5v14H5V5zm2-2H3v18h18zm-4 14H7v-1h10zm0-2H7v-1h10zm0-3H7V7h10z"></path>
    </svg>
  );
};
export const ThreeDBoxIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
    <path fill="#010101" fillRule="evenodd" d="m9.675 19.34l-3-2.144c-.821-.586-1.232-.88-1.453-1.31S5 14.95 5 13.942v-3.883c0-.322 0-.592.007-.825L11 13.514v6.717c-.357-.2-.773-.498-1.325-.892M13 20.23c.357-.2.773-.498 1.325-.892l3-2.143c.821-.586 1.232-.88 1.453-1.31S19 14.95 19 13.942v-3.883c0-.322 0-.592-.007-.825L13 13.514zm5.128-12.837L12 11.771L5.872 7.394c.212-.168.475-.356.803-.59l3-2.143C10.798 3.859 11.36 3.458 12 3.458s1.202.4 2.325 1.203l3 2.143c.329.234.591.422.803.59" clipRule="evenodd"></path>
  </svg>
  );
};
