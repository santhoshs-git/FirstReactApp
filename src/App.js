import react from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Button from "./Button"

const Firstapp=()=> {
    return (
        <div>
        <h1>Hello World This is My First React App</h1>
        <h2>Tech Stacks Going to learn</h2>
        
        <Button buttontext="HTML" />
        <Button buttontext="JavaScript" />
        <Button buttontext="ReactJS"/>
        
        </div>
    )
}

export default Firstapp