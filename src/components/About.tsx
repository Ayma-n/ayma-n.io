import React from 'react'
import InfoBox from './InfoBox';
import aymanProfile from "../images/ayman-profile.png";
import aboutMe from "../images/profile.png";
import currentOccupation from "../images/scholarship.png";
import interestCS from "../images/desktop.png";
import experienceImg from "../images/experience.png";


const About = React.forwardRef((props, ref: React.LegacyRef<HTMLDivElement> | undefined) => {

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
            <div id="info-box-wrapper" className="ml-8 flex flex-col h-32 gap-8 overflow-auto overscroll-contain">
                <InfoBox icon={aboutMe} title="About Me">
                    I was born and raised in Casablanca, Morocco. I went to a French high school, the Lycée Lyautey where I got my French baccalaureate.
                </InfoBox>
                <InfoBox icon={currentOccupation} title="Current Occupation">
                    I’m a sophomore at Brown University, in Providence, RI! I plan to concentrate in Computer Science and am expected to graduate in May 2025.
                </InfoBox>
                <InfoBox icon={interestCS} title="Areas of interest in CS">
                    I’m interested in full-stack web development, game development, as well as AI and Machine Learning.
                </InfoBox>
                <InfoBox icon={experienceImg} title="Experience">
                    I have experience with Node.js, React and Flutter, but also with Unity. Check out my resume!
                </InfoBox>
            </div>
        </div>
    )
})

export default About;

