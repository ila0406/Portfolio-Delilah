import cards from "./cards.json"
import Card from "../components/Card/Card"
import React, {useState} from "react"
function Test() {
const[testState, setTest] = useState(cards)


    console.log(cards)
    return (
<div>
    <h1>text below</h1>
    {testState.map(element => {
        
        <Card 
            projectImage={element.projectImage}
            altTitle={element.altTitle}
            deployed={element.deployed}
            title={element.title}
            description={element.description}
            github={element.github}
            // projectTitle={element.projectTitle}
            />
    })}
</div>
)
}

export default Test