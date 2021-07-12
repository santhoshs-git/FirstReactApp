import react from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Button from "./Button"

const Firstapp=()=> {
    return (
        <div>
        <h1>Hello World This is My First React App</h1>
        <h2>This is second Heading</h2>
        <ul>
        <li><Button buttontext="Signup" /></li>
        <li><Button buttontext="Sigin" /></li>
        <li><Button buttontext="Forgot Password ?"/></li>
        </ul>
        </div>
    )
}

export default Firstapp