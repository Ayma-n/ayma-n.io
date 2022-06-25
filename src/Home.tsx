import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import aymanProfile from "./images/ayman-profile.png"
import githubLogo from "./images/GitHub-Mark-Light-64px.png"
import linkedinLogo from "./images/linkedin-3-64.png"

export default function Home() {
    return (
        <div className="h-screen w-screen text-white" id="Home">
            <div id="name-and-menu" className="pt-8 md:w-screen md:flex md:flex-row md:justify-between">
                <div id="my-name" className="font-bold text-xl ml-6">
                    Ayman Benjelloun Touimi
                </div>
                <div id="menu" className="flex flex-row gap-4 text-lg justify-center pt-5 md:pt-0 md:mr-16">
                    <Link id="home-link" to="/">home</Link>
                    <Link id="projects-link" to="/projects">projects</Link>
                    <Link id="projects-link" to="/blog">blog</Link>
                </div>
            </div>
            <div id="ayman-profile">
                <img className="w-20 ml-6 pt-28" src={aymanProfile}></img>
            </div>
            <div id="main-titles" className="font-bold text-xl pt-4 ml-6">
                <div>hi there!</div>
                <div className="text-3xl">my name is Ayman.</div>
            </div>
            <div id="short-presentation" className="ml-6 pt-2">
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
            <div className="box-border rounded-xl w-40 h-11 mt-7 cst-bg-white-transparent border-solid border-2 border-white ml-auto mr-auto">
                <div className="text-center align-middle leading-10">
                    about me
                </div>
            </div>
        </div>
    )
}
