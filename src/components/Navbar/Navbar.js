import { useState } from 'react'

function Navbar() {
    const [that, setThat] = useState("string value")
    const example = {
        backgroundColor: "red",
        color: "green"
    }

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