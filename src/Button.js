import react from "react"
import ReactDOM from "react-dom"

const Button=({buttontext})=> {
    return (
        <div className="flex-parent jc-center">
        <button className="btn" > {buttontext} </button>
        </div>
    )

}

export default Button