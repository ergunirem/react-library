import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Header() {
    return (
        <div>
            <header className='navbar'>
                <h1>Online Library</h1>
                <p>Created by Irem for the Odin Project | <FaGithub/> <a href="https://github.com/ergunirem" target="blank" rel='noopener'>ergunirem</a></p>
            </header>
        </div>
    )
}

export default Header
