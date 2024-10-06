// MyIcon.tsx
import React from 'react';

const ToggleIcon: React.FC<{ width?: number; height?: number; fill?:string }> = ({
  width = 40,
  height = 21,
}) => (
  <svg width={width} height={height} viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_di_413_854)">
      <rect width="40" height="20" rx="10" transform="matrix(-1 0 0 1 40 0)" fill="#008060" />
      <circle cx="7" cy="7" r="7" transform="matrix(-1 0 0 1 17 3)" fill="white" />
    </g>
    <defs>
      <filter id="filter0_di_413_854" x="0" y="0" width="40" height="21" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_413_854" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_413_854" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="-1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_413_854" />
      </filter>
    </defs>
  </svg>
);

export default ToggleIcon;
