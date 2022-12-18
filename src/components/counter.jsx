import "./counter.css"
import React, {useState} from "react"

function Counter(){
    const [counter, setCounter] = useState(0)
    function incrementCounter(){
        setCounter(counter + 1)
    }
    
    function decrementCounter(){
        setCounter(counter - 1)
    }

    return (
        <div className="buttons">
            <button onClick={decrementCounter} className="btn">-</button>
            {counter}
            <button onClick={incrementCounter} className="btn">+</button>
        </div>
    )
}

export default Counter