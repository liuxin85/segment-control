import React from "react";

function CustomLogo({ fill }: {fill: string}) {
  return (
    <div style={{ background: "#fff", width: 43, height: 43, borderRadius: 12 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none">
        <g clipPath="url(#clip0_159_999)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7C13 4.79086 14.7909 3 17 3C19.2091 3 21 4.79086 21 7C21 9.20914 19.2091 11 17 11H14C13.4477 11 13 10.5523 13 10V7ZM3 7.00004C3 4.7909 4.79086 3.00004 7 3.00004C9.20914 3.00004 11 4.7909 11 7.00004V10C11 10.5523 10.5523 11 10 11H7C4.79086 11 3 9.20917 3 7.00004ZM3 17C3 14.7909 4.79086 13 7 13H10C10.5523 13 11 13.4478 11 14V17C11 19.2092 9.20914 21 7 21C4.79086 21 3 19.2092 3 17ZM13 14C13 13.4478 13.4477 13 14 13H17C19.2091 13 21 14.7909 21 17C21 19.2092 19.2091 21 17 21C14.7909 21 13 19.2092 13 17V14Z"
            fill="url(#paint0_linear_159_999)"
            fillOpacity="0.86"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_159_999"
            x1="12"
            y1="3"
            x2="12"
            y2="21"
            gradientUnits="userSpaceOnUse">
            <stop stopColor={fill} />
            <stop offset="1" stopColor={fill} stopOpacity="0.6" />
          </linearGradient>
          <clipPath id="clip0_159_999">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default CustomLogo;
