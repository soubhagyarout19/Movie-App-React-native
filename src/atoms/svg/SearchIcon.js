import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="30px"
      height="30px"
      {...props}
    >
      <Path
        d="M21 3C11.6 3 4 10.6 4 20s7.6 17 17 17 17-7.6 17-17S30.4 3 21 3zm0 30c-7.2 0-13-5.8-13-13S13.8 7 21 7s13 5.8 13 13-5.8 13-13 13z"
        fill="#808080"
      />
      <Path
        fill="none"
        stroke="#808080"
        strokeWidth={6}
        strokeMiterlimit={10}
        d="M31.2 31.2L44.5 44.5"
      />
    </Svg>
  );
}

export default SearchIcon;
