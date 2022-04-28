import React from 'react'

export default function DiamondPath(props) {
  return (
    <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<defs>
			<path id="path1" d="M180 11H210M150 41H240M120 71H270M90 101H300M60 131H330M30 161H360M60 191H330M90 221H300M120 251H270M150 281H240M180 311H210"></path>
			</defs>
			<text transform="translate(0,35)" fill="red" fontSize="8">
			<textPath xlinkHref="#path1"> {props.text} </textPath>
			</text>
    </svg>
  )
}
