import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/Home.css"
import githubLogo from "../images/GitHub-Mark-Light-64px.png"
import linkedinLogo from "../images/linkedin-3-64.png"
import InfoBox from './InfoBox'
import aymanProfile from "../images/ayman-profile.png";
import About from './About'

export default function Home() {

    const aboutDivRef = useRef<null | HTMLDivElement>(null);

    const renderProfile = (isWider: boolean) => {
        var imageWidth; isWider ? imageWidth = "w-40 md:w-96 md:ml-48" : imageWidth = "w-20 md:w-72";
        return (
            <div id="ayman-profile">
                <img className={"ml-6 pb-3 md:ml-0 md:pb-0 " + imageWidth} src={aymanProfile}></img>
            </div>
        )
    }

    const handleAboutClick = () => {
        (aboutDivRef.current as HTMLDivElement).style.display = 'flex';
        aboutDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
        <div className="h-screen w-screen text-white flex flex-col" id="Home">
            <div id="name-and-menu" className="pt-8 fixed w-screen md:flex md:flex-row md:justify-between">
                <div id="my-name" className="font-bold text-xl ml-6">
                    <Link to="/">Ayman Benjelloun Touimi</Link>
                </div>
                <div id="menu" className="flex flex-row gap-4 text-lg justify-center pt-5 md:pt-0 md:mr-16">
                    <Link id="home-link" className="hover:text-gray-200" to="/">home</Link>
                    <Link id="projects-link" className="hover:text-gray-200" to="/projects">projects</Link>
                    <Link id="projects-link" className="hover:text-gray-200" to="/blog">blog</Link>
                </div>
            </div>
            <div id="main-content-wrapper" className="flex-grow flex justify-center items-center">
                <div id="main-content" className="md:flex md:flex-row-reverse md:justify-center md:gap-8 md:items-center">
                    {renderProfile(false)}
                    <div id="text-and-socials">
                        <div id="main-titles" className="font-bold text-xl md:text-2xl ml-6">
                            <div>hi there! 👋</div>
                            <div className="text-3xl md:text-4xl">my name is Ayman.</div>
                        </div>
                        <div id="short-presentation" className="ml-6 pt-2 md:w-3/4">
                            I’m currently a sophomore at Brown University, studying Computer Science.
                        </div>
                        <div className="flex flex-row ml-6 pt-3 gap-4" id="social-logos">
                            <a href="https://github.com/Ayma-n">
                                <img id="github-logo" className="w-7" src={githubLogo} />
                            </a>
                            <a href="https://www.linkedin.com/in/ayman-benjelloun-touimi-7b3160202/">
                                <img id="linkedin-logo" className="w-7" src={linkedinLogo} />
                            </a>
                        </div>
                        <div onClick={handleAboutClick}
                            className="box-border rounded-xl h-11 w-52 mt-7 cst-bg-white-transparent cursor-pointer border-solid border-2 border-white ml-auto mr-auto md:ml-6 md:mt-12">
                            <div className="text-center align-middle leading-10">
                                learn more about me 🤗
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <About ref={aboutDivRef}></About>
    </>)
}