interface IconProps {
  width?: string;
  fillColor?: string;
  strokeWidth?: string;
  strokeColor?: string;
  height?: string;
}

export function Bars({height,width,fillColor,strokeWidth,strokeColor}: IconProps) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6S500.538 128 486.4 128H153.6c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128H25.6C11.462 230.4 0 241.863 0 256c0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6H256c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path>
        </g>
      </svg>
    </>
  );
}

export function MessageSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="m331.756 277.251-42.881 43.026c-17.389 17.45-47.985 17.826-65.75 0l-42.883-43.026L26.226 431.767C31.959 434.418 38.28 436 45 436h422c6.72 0 13.039-1.58 18.77-4.232L331.756 277.251z"
          ></path>
          <path
            d="M467 76H45c-6.72 0-13.041 1.582-18.772 4.233l164.577 165.123c.011.011.024.013.035.024a.05.05 0 0 1 .013.026l53.513 53.69c5.684 5.684 17.586 5.684 23.27 0l53.502-53.681s.013-.024.024-.035c0 0 .024-.013.035-.024L485.77 80.232C480.039 77.58 473.72 76 467 76zM4.786 101.212C1.82 107.21 0 113.868 0 121v270c0 7.132 1.818 13.79 4.785 19.788l154.283-154.783L4.786 101.212zM507.214 101.21 352.933 256.005 507.214 410.79C510.18 404.792 512 398.134 512 391V121c0-7.134-1.82-13.792-4.786-19.79z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function LocationSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 32 32"
      >
        <g>
          <path
            d="M16 1A11 11 0 0 0 5 12c0 5.81 9.8 18.1 10.22 18.63a1 1 0 0 0 1.56 0C17.2 30.1 27 17.81 27 12A11 11 0 0 0 16 1zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function DialerSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M5.1 2.7c-.6 0-1.2.2-1.5.5-.6.5-1.7 1.7-1.7 3.9 0 1.5.7 3.3 2 5l.1.2c2.4 3.6 5.5 6.2 8.5 7.5 2.3 1 3.9 1.4 5 1.4.4 0 .7-.1.9-.1 1.2-.3 2.8-1.2 3.1-2.2.4-1.1.4-2 .3-2.1 0 0-.3-.1-.5-.2l-.3-.2c-1.4-.7-3.1-1.5-3.5-1.6h-.3c-.1 0-.3 0-.5.3l-.2.3c-.4.6-.9 1.2-1.2 1.6-.4.4-1.1.6-1.7.3l-.2-.1c-.7-.3-2.2-.9-4.1-2.6-1.4-1.3-2.5-2.8-3-3.7-.5-.8 0-1.3.2-1.6.4-.3.6-.4.7-.6l.3-.3c.3-.3.4-.4.6-.7.1-.1 0-.3-.1-.6-.1-.2-.5-1.2-1.1-2.6l-.5-1.2c-.3-.6-.3-.6-.8-.6h-.5z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function SearchSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 612.01 612.01"
      >
        <g>
          <path
            d="M606.209 578.714 448.198 423.228C489.576 378.272 515 318.817 515 253.393 514.98 113.439 399.704 0 257.493 0S.006 113.439.006 253.393s115.276 253.393 257.487 253.393c61.445 0 117.801-21.253 162.068-56.586l158.624 156.099c7.729 7.614 20.277 7.614 28.006 0a19.291 19.291 0 0 0 .018-27.585zM257.493 467.8c-120.326 0-217.869-95.993-217.869-214.407S137.167 38.986 257.493 38.986c120.327 0 217.869 95.993 217.869 214.407S377.82 467.8 257.493 467.8z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function ArrowRightSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 492.004 492.004"
      >
        <g>
          <path
            d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function ScrollUp({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <circle
            cx="256"
            cy="256"
            r="236.17"
            fill="#ff5956"
            data-original="#1138f7"
            opacity="1"
          ></circle>
          <path
            d="M256 512C114.853 512 0 397.167 0 256 0 114.853 114.853 0 256 0c141.167 0 256 114.853 256 256 0 141.167-114.833 256-256 256zm0-472.341C136.705 39.659 39.659 136.705 39.659 256S136.705 472.341 256 472.341 472.341 375.275 472.341 256c0-119.295-97.046-216.341-216.341-216.341z"
            fill="#ff5956"
            data-original="#1138f7"
            opacity="1"
          ></path>
          <path
            d="M369.227 311.126c-7.734 7.694-20.226 7.694-27.96 0l-85.069-85.069-85.069 85.069c-8.309 7.119-20.841 6.147-27.96-2.161-6.365-7.416-6.365-18.382 0-25.798l99.148-99.148c7.734-7.694 20.226-7.694 27.96 0l99.148 99.148c7.635 7.793 7.555 20.285-.198 27.959z"
            fill="#ffffff"
            data-original="#ffffff"
            opacity="1"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function SettingSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M490.667 405.333h-56.811C424.619 374.592 396.373 352 362.667 352s-61.931 22.592-71.189 53.333H21.333C9.557 405.333 0 414.891 0 426.667S9.557 448 21.333 448h270.144c9.237 30.741 37.483 53.333 71.189 53.333s61.931-22.592 71.189-53.333h56.811c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-128 53.334c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.358 32-32 32zM490.667 64h-56.811c-9.259-30.741-37.483-53.333-71.189-53.333S300.736 33.259 291.477 64H21.333C9.557 64 0 73.557 0 85.333s9.557 21.333 21.333 21.333h270.144C300.736 137.408 328.96 160 362.667 160s61.931-22.592 71.189-53.333h56.811c11.797 0 21.333-9.557 21.333-21.333S502.464 64 490.667 64zm-128 53.333c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.358 32-32 32zM490.667 234.667H220.523c-9.259-30.741-37.483-53.333-71.189-53.333s-61.931 22.592-71.189 53.333H21.333C9.557 234.667 0 244.224 0 256c0 11.776 9.557 21.333 21.333 21.333h56.811c9.259 30.741 37.483 53.333 71.189 53.333s61.931-22.592 71.189-53.333h270.144c11.797 0 21.333-9.557 21.333-21.333.001-11.776-9.535-21.333-21.332-21.333zM149.333 288c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.357 32-32 32z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function HomeRegular({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 511 511.999"
      >
        <g>
          <path
            d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function HomeSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M490.667 405.333h-56.811C424.619 374.592 396.373 352 362.667 352s-61.931 22.592-71.189 53.333H21.333C9.557 405.333 0 414.891 0 426.667S9.557 448 21.333 448h270.144c9.237 30.741 37.483 53.333 71.189 53.333s61.931-22.592 71.189-53.333h56.811c11.797 0 21.333-9.557 21.333-21.333s-9.535-21.334-21.332-21.334zm-128 53.334c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.358 32-32 32zM490.667 64h-56.811c-9.259-30.741-37.483-53.333-71.189-53.333S300.736 33.259 291.477 64H21.333C9.557 64 0 73.557 0 85.333s9.557 21.333 21.333 21.333h270.144C300.736 137.408 328.96 160 362.667 160s61.931-22.592 71.189-53.333h56.811c11.797 0 21.333-9.557 21.333-21.333S502.464 64 490.667 64zm-128 53.333c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.358 32-32 32zM490.667 234.667H220.523c-9.259-30.741-37.483-53.333-71.189-53.333s-61.931 22.592-71.189 53.333H21.333C9.557 234.667 0 244.224 0 256c0 11.776 9.557 21.333 21.333 21.333h56.811c9.259 30.741 37.483 53.333 71.189 53.333s61.931-22.592 71.189-53.333h270.144c11.797 0 21.333-9.557 21.333-21.333.001-11.776-9.535-21.333-21.332-21.333zM149.333 288c-17.643 0-32-14.357-32-32s14.357-32 32-32 32 14.357 32 32-14.357 32-32 32z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function HeartRegular({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512.001 512"
      >
        <g>
          <path
            d="M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function UserRegular({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d="M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM111.105 429.297c8.454-72.735 70.989-128.89 144.895-128.89 38.96 0 75.598 15.179 103.156 42.734 23.281 23.285 37.965 53.687 41.742 86.152C361.641 462.172 311.094 482 256 482s-105.637-19.824-144.895-52.703zM256 269.507c-42.871 0-77.754-34.882-77.754-77.753C178.246 148.879 213.13 114 256 114s77.754 34.879 77.754 77.754c0 42.871-34.883 77.754-77.754 77.754zm170.719 134.427a175.9 175.9 0 0 0-46.352-82.004c-18.437-18.438-40.25-32.27-64.039-40.938 28.598-19.394 47.426-52.16 47.426-89.238C363.754 132.34 315.414 84 256 84s-107.754 48.34-107.754 107.754c0 37.098 18.844 69.875 47.465 89.266-21.887 7.976-42.14 20.308-59.566 36.542-25.235 23.5-42.758 53.465-50.883 86.348C50.852 364.242 30 312.512 30 256 30 131.383 131.383 30 256 30s226 101.383 226 226c0 56.523-20.86 108.266-55.281 147.934zm0 0"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function UserSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 45.532 45.532"
      >
        <g>
          <path
            d="M22.766.001C10.194.001 0 10.193 0 22.766s10.193 22.765 22.766 22.765c12.574 0 22.766-10.192 22.766-22.765S35.34.001 22.766.001zm0 6.807a7.53 7.53 0 1 1 .001 15.06 7.53 7.53 0 0 1-.001-15.06zm-.005 32.771a16.708 16.708 0 0 1-10.88-4.012 3.209 3.209 0 0 1-1.126-2.439c0-4.217 3.413-7.592 7.631-7.592h8.762c4.219 0 7.619 3.375 7.619 7.592a3.2 3.2 0 0 1-1.125 2.438 16.702 16.702 0 0 1-10.881 4.013z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function MenuSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 24 24"
      >
        <g>
          <path
            d="M13 18H5c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zM19 13H5c-.6 0-1-.4-1-1s.4-1 1-1h14c.6 0 1 .4 1 1s-.4 1-1 1zM19 8h-8c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function DarkModeSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 1707 1707"
      >
        <g>
          <path
            d="M853 0c236 0 449 96 604 250 154 154 250 368 250 603 0 236-96 449-250 604-155 154-368 250-604 250-235 0-449-96-603-250C96 1302 0 1089 0 853c0-235 96-449 250-603S618 0 853 0zM455 388c21-21 44-41 68-59 25-18 50-34 76-48 20-10 44-3 54 16 7 14 6 29-1 41-53 101-72 215-55 326 16 108 66 213 149 296 84 84 188 134 297 150 111 17 227-2 329-56l-1-1c20-10 44-3 55 17 7 13 5 29-2 41-14 25-29 49-47 72-18 24-37 47-58 68-120 120-276 179-432 179s-313-59-432-179c-119-119-179-275-179-431 0-157 60-313 179-432zm945-82C1260 167 1067 80 853 80c-213 0-407 87-547 226C167 446 80 640 80 853c0 214 87 407 226 547 140 140 334 227 547 227 214 0 407-87 547-227s227-333 227-547c0-213-87-407-227-547z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function HelpSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 431.855 431.855"
      >
        <g>
          <path
            d="M215.936 0C96.722 0 .008 96.592.008 215.814c0 119.336 96.714 216.041 215.927 216.041 119.279 0 215.911-96.706 215.911-216.041C431.847 96.592 335.214 0 215.936 0zm15.387 335.962c-5.015 4.463-10.827 6.706-17.411 6.706-6.812 0-12.754-2.203-17.826-6.617-5.08-4.406-7.625-10.575-7.625-18.501 0-7.031 2.463-12.949 7.373-17.745 4.91-4.796 10.933-7.194 18.078-7.194 7.031 0 12.949 2.398 17.753 7.194 4.796 4.796 7.202 10.713 7.202 17.745-.009 7.812-2.521 13.95-7.544 18.412zm62.533-155.028c-3.853 7.145-8.429 13.306-13.737 18.501-5.292 5.194-14.81 13.924-28.548 26.198-3.788 3.463-6.836 6.503-9.12 9.12-2.284 2.626-3.991 5.023-5.105 7.202a34.697 34.697 0 0 0-2.593 6.535c-.61 2.17-1.528 5.999-2.772 11.469-2.113 11.608-8.754 17.411-19.915 17.411-5.804 0-10.681-1.894-14.656-5.69-3.959-3.796-5.934-9.429-5.934-16.907 0-9.372 1.455-17.493 4.357-24.361 2.886-6.869 6.747-12.892 11.543-18.086 4.804-5.194 11.274-11.356 19.427-18.501 7.145-6.251 12.307-10.965 15.485-14.144a47.87 47.87 0 0 0 8.031-10.632c2.187-3.91 3.26-8.145 3.26-12.721 0-8.933-3.308-16.46-9.957-22.597-6.641-6.137-15.209-9.21-25.703-9.21-12.282 0-21.321 3.097-27.125 9.291-5.804 6.194-10.705 15.314-14.729 27.369-3.804 12.616-11.006 18.923-21.598 18.923-6.251 0-11.526-2.203-15.826-6.609-4.292-4.406-6.438-9.177-6.438-14.314 0-10.6 3.406-21.346 10.21-32.23 6.812-10.884 16.745-19.899 29.807-27.036 13.054-7.145 28.296-10.722 45.699-10.722 16.184 0 30.466 2.991 42.854 8.966 12.388 5.966 21.963 14.087 28.718 24.361 6.747 10.266 10.128 21.427 10.128 33.482.016 9.471-1.91 17.787-5.763 24.932z"
          ></path>
        </g>
      </svg>
    </>
  );
}

export function DurationSolid({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 24 24"
      >
        <g>
          <g data-name="Layer 2">
            <path
              d="M21.854 11.044a.751.751 0 0 1-.739-.623 9.084 9.084 0 0 0-.494-1.777.751.751 0 0 1 1.4-.545 10.794 10.794 0 0 1 .574 2.068.75.75 0 0 1-.613.866.788.788 0 0 1-.128.011zm-1.439-3.7A.75.75 0 0 1 19.783 7a9.285 9.285 0 0 0-1.149-1.446.75.75 0 1 1 1.076-1.045 10.818 10.818 0 0 1 1.335 1.679.75.75 0 0 1-.63 1.156zm-2.772-2.851a.739.739 0 0 1-.422-.131 9.433 9.433 0 0 0-1.621-.885.75.75 0 1 1 .586-1.377 10.728 10.728 0 0 1 1.88 1.028.75.75 0 0 1-.423 1.369zm-3.657-1.546a.841.841 0 0 1-.148-.014A9.376 9.376 0 0 0 12 2.75a.75.75 0 0 1 0-1.5 10.82 10.82 0 0 1 2.133.212.75.75 0 0 1-.147 1.485z"
            ></path>
            <path
              d="M12 22.75a10.75 10.75 0 0 1 0-21.5.75.75 0 0 1 0 1.5 9.25 9.25 0 1 0 9.2 10.176.75.75 0 0 1 1.492.148A10.707 10.707 0 0 1 12 22.75z"
            ></path>
            <path
              d="M12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8zm4.6 11.45a.75.75 0 0 1-1.05.15l-4-3a.739.739 0 0 1-.3-.6V7a.75.75 0 0 1 1.5 0v4.62l3.7 2.78a.75.75 0 0 1 .15 1.05z"
            ></path>
          </g>
        </g>
      </svg>
    </>
  );
}

export function CalenderRegular({height,width,fillColor,strokeWidth,strokeColor}: IconProps){
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        fill={fillColor}
        style={{ strokeWidth: `${strokeWidth}rem`, stroke: strokeColor }}
        viewBox="0 0 512 512"
      >
        <g>
          <circle
            cx="386"
            cy="210"
            r="20"
          ></circle>
          <path
            d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20V120c0-44.112-35.888-80-80-80z"
          ></path>
          <path
            d="M391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z"
          ></path>
          <path
            d="M420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
          ></path>
          <circle
            cx="299"
            cy="210"
            r="20"
          ></circle>
          <circle
            cx="212"
            cy="297"
            r="20"
          ></circle>
          <circle
            cx="125"
            cy="210"
            r="20"
          ></circle>
          <circle
            cx="125"
            cy="297"
            r="20"
          ></circle>
          <circle
            cx="125"
            cy="384"
            r="20"
          ></circle>
          <circle
            cx="212"
            cy="384"
            r="20"
          ></circle>
          <circle
            cx="212"
            cy="210"
            r="20"
          ></circle>
        </g>
      </svg>
    </>
  );
}