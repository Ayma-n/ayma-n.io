import React, { ReactNode } from 'react'

interface InfoBoxProps {
    icon: string,
    title: string,
    children: ReactNode
}

export default function InfoBox(props: InfoBoxProps) {
    return (
        <div id="InfoBox" className="text-white">
            <div id="title-icon" className="flex flex-row items-center gap-3">
                <img src={props.icon} className="w-12 h-12"></img>
                <div>{props.title}</div>
            </div>
            {props.children}
        </div>
    )
}
