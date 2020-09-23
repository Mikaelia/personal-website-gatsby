import React, { useState } from "react"

export default function Star({ style }) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <svg className="star" viewBox="0 0 11.09 11.09" style={style}>
      <polygon
        fill="#fff1bf"
        points="5.55 0 6.56 4.77 11.09 5.55 6.56 6.87 5.55 11.09 4.47 6.89 0 5.55 4.31 4.8 5.55 0"
      />
    </svg>
  )
}
