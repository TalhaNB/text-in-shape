import React from 'react'

export default function DiamondPath(props) {
  return (
    <svg width="600" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<defs>
			<path id="path1" d="M10 110 230 110M210 90H30M50 70H190M170 50H70M90 30H150M130 10H110M30 130H210M190 150H50M70 170H170M150 190H90M110 210H130"></path>
			</defs>
			<text transform="translate(0,35)" fill="red" font-size="8">
			<textPath xlinkHref="#path1"> {props.text} </textPath>
			</text>
    </svg>
  )
}
