import React from 'react'

export default function ProjectPost(props : any) {
  return (
    <div key={props.slug}>
      <div id="name">{props.name}</div>
      <div id="date">{props.date}</div>
      <div id="brief">{props.brief}</div>
      {/* <div id="mainImage">
        <img src={props.imageUrl}></img>
      </div> */}
    </div>
  )
}
