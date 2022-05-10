// import { useState } from 'react'

function Navbar() {
    // const [that, setThat] = useState("string value")
    // const nav {
    //     padding-top: 15px;
    //     margin-right: 20px;
    //     float: right;
    //     font-size: 20px;
    // }

    return (
        <nav>
            <ul>
                <li>
                    <a href="#me">About Me</a>
                </li>
                <li>
                    <a href="#work">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact Me</a>
                </li>
                <li>
                    <a href="./assets/Delilah Resume 2021.pdf">Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar