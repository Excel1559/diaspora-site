import React from "react"

export function Profile(props: { color?: string }) {
  const color = props.color ?? "#2D2A26"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25.044" height="25.044" viewBox="0 0 25.044 25.044">
      <g id="profile-ope-icon" transform="translate(0.5 0.5)">
        <line id="Line_7" data-name="Line 7" y2="24.044" transform="translate(12.022)" fill="none" stroke="#2d2a26" strokeLinecap="round" strokeWidth="1"/>
        <line id="Line_8" data-name="Line 8" y2="24.044" transform="translate(24.044 12.022) rotate(90)" fill="none" stroke="#2d2a26" strokeLinecap="round" strokeWidth="1"/>
      </g>
    </svg>

  )
}