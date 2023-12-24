import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const EmptySvg = (props) => (
    <Svg
        width={297}
        height={297}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={148.5} cy={148.5} r={148.5} fill="#F3F7FF" />
        <Path
            d="M180.333 177.439 148.5 158.714l31.833-18.555 31.834-18.726L244 140.159l-31.833 18.555-31.834 18.725Z"
            fill="#D9AC80"
        />
        <Path
            d="M148.159 158.544v73.029l63.156-36.6v-35.748l-30.982 18.214-31.833-18.725-.341-.17Z"
            fill="#A67E4F"
        />
        <Path
            d="m116.667 177.439 31.833-18.725-31.833-18.555-31.834-18.726L53 140.159l31.833 18.555 31.834 18.725Z"
            fill="#D9AC80"
        />
        <Path
            d="m148.5 83.982 31.833 18.726 31.834 18.725-31.834 18.726-31.833 18.555-31.833-18.555-31.834-18.726 31.834-18.725L148.5 83.982Z"
            fill="#643513"
        />
        <Path
            d="M116.667 65.427 148.5 83.982l-31.833 18.726-31.834 18.725L53 102.708l31.833-18.726 31.834-18.555ZM180.333 65.427 148.5 83.982l31.833 18.726 31.834 18.725L244 102.708l-31.833-18.726-31.834-18.555Z"
            fill="#D9AC80"
        />
        <Path
            d="M148.159 159.054v72.519l-63.326-36.6v-36.259l31.834 18.725 31.492-18.385Z"
            fill="#926E43"
        />
        <Path
            d="m116.667 102.708-31.834 18.725 31.834 18.726 10.213 5.958 21.62-12.597V83.982l-31.833 18.726Z"
            fill="#8D5122"
        />
        <Path
            d="M148.5 83.982v49.538l21.619 12.597 10.214-5.958 31.834-18.726-31.834-18.725L148.5 83.982Z"
            fill="#77411B"
        />
    </Svg>
);

export default EmptySvg;
