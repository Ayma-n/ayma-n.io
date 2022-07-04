import React, { LegacyRef, MutableRefObject, ReactNode, Ref } from 'react'

interface InfoBoxProps {
    icon: string,
    title: string,
    children: ReactNode
}

const InfoBox = React.forwardRef((props : InfoBoxProps, ref : LegacyRef<HTMLDivElement> | undefined) => {
    return (
        <div id="InfoBox" ref={ref} className="text-white">
            <div id="title-icon" className="flex flex-row items-center gap-3">
                <img src={props.icon} className="w-12 h-12"></img>
                <div>{props.title}</div>
            </div>
            {props.children}
        </div>
    )
})

export default InfoBox;
