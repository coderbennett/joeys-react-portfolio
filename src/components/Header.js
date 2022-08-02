import React, { useState } from 'react';


function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">joey bennett</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><a>about</a></li>
                <li><a>resume</a></li>
                <li><a>projects</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;