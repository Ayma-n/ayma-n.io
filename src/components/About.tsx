import React from 'react'
import InfoBox from './InfoBox';
import aymanProfile from "../images/ayman-profile.png";


const About = React.forwardRef((props, ref : React.LegacyRef<HTMLDivElement> | undefined) => {

    const renderProfile = (isWider: boolean) => {
        var imageWidth; isWider ? imageWidth = "w-40 md:w-96 md:ml-48" : imageWidth = "w-20 md:w-72";
        return (
            <div id="ayman-profile">
                <img className={"ml-6 pb-3 md:ml-0 md:pb-0 " + imageWidth} src={aymanProfile}></img>
            </div>
        )
    }

    return (
        <div id="About" ref={ref} className="h-screen w-screen items-center hidden">
            {renderProfile(true)}
            <div id="info-box-wrapper" className="ml-8 flex flex-col h-20 gap-8 overflow-auto overscroll-contain">
                <InfoBox icon={aymanProfile} title="Title A">
                    {/* <div onClick={handleTestClick} className="w-10 h-10">TEST ME!</div> */}
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </InfoBox>
                <InfoBox icon={aymanProfile} title="Title B">
                    <div>Curabitur nec mi congue, semper purus eu, feugiat mauris.</div>
                </InfoBox>
                <InfoBox icon={aymanProfile} title="Title C">
                    Donec mattis turpis id tortor ullamcorper, et congue odio posuere.
                </InfoBox>
                <InfoBox icon={aymanProfile} title="Title D">
                    Aliquam porttitor ex eget massa maximus ultrices.
                </InfoBox>
            </div>
        </div>
    )
})

export default About;

