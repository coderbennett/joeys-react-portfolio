import React, { useState } from 'react';
import resume from '../assets/joeybennett-resume.pdf';

function Header() {
    return (
        <section>
            <div className="navbar bg-base-100 fixed top-0 w-100 z-50">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">joey bennett</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>about</a></li>
                        <li><a href={resume} target="_blank" rel="noreferrer">resume</a></li>
                        <li><a>projects</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="hero h-96 bg-accent">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Welcome!</h1>
                        <p className="py-6">I'm joey and I am a software developer! I built websites with React, JavaScript, HTML, CSS, MongoDB, Express and Node.js</p>
                        <button className="btn btn-base text-base hover:btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;