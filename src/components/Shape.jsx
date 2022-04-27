import React from 'react'

export default function Shape(props) {
  return (
		<div className='container'>
			<div className='circle text'>
				<p>{props.text ? props.text: "This is a sample text"}</p>
			</div>
			<div className='elipse text'>
				<p>{props.text ? props.text: "This is a sample text"}</p>	
			</div>
			<div className='parallelogram text'>
				<p>{props.text ? props.text: "This is a sample text"}</p>
			</div>
			<div className='diamond text'>
				<p>{props.text ? props.text: "This is a sample text"}</p>
			</div>
		</div>
  )
}
