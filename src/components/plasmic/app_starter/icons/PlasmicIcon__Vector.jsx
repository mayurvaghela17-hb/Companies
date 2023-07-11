// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M4.719 0c.791 0 1.563.203 2.319.608A4.34 4.34 0 018.8 2.355a4.81 4.81 0 01.631 2.367 4.76 4.76 0 01-.623 2.344 4.378 4.378 0 01-1.742 1.749 4.759 4.759 0 01-2.347.623c-.817 0-1.6-.207-2.347-.623A4.387 4.387 0 01.625 7.066 4.744 4.744 0 010 4.722C0 3.9.211 3.11.634 2.355A4.35 4.35 0 012.4.608C3.153.203 3.927 0 4.719 0zm0 .781a4.02 4.02 0 00-1.935.51 3.658 3.658 0 00-1.472 1.457 3.982 3.982 0 00-.531 1.975c0 .679.175 1.33.523 1.953a3.7 3.7 0 001.459 1.458 3.966 3.966 0 001.956.523 3.97 3.97 0 001.956-.523A3.678 3.678 0 008.13 6.676a3.972 3.972 0 00.518-1.953 4 4 0 00-.527-1.975A3.633 3.633 0 006.65 1.292c-.63-.34-1.274-.51-1.93-.51zM2.649 7.33h.82V5.173h.48c.288 0 .507.058.657.175.217.158.501.553.855 1.18l.45.801h1l-.618-.993c-.296-.472-.546-.807-.75-1.007a1.352 1.352 0 00-.432-.27c.438-.034.79-.187 1.054-.463.265-.275.397-.597.397-.969 0-.262-.079-.51-.237-.745a1.267 1.267 0 00-.638-.491c-.266-.094-.697-.139-1.295-.139H2.65V7.33zm.82-2.856h.994c.474 0 .798-.073.97-.214a.691.691 0 00.26-.563.692.692 0 00-.125-.404.747.747 0 00-.345-.265c-.15-.06-.423-.087-.824-.087h-.93v1.533z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
