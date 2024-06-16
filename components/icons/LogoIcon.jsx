function LogoIcon({ fill = "#3B81F6", ...rest }) {
  return (
    <svg 
      fill="#000000" 
      viewBox="0 0 26 26"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"/>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier">
          <path 
            d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"
            fill={fill}
          />
        </g>
    </svg>
  );
}
  
export default LogoIcon;