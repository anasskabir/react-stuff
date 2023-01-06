import "./counter.css"
import React, {useState} from "react"

function Counter(){
    const [arr, setArr] = useState([])
    
    function addPlus(){
        setArr(prevArr => [ ...prevArr, "+"])
    }
    
    function addMinus(){
        setArr(prevArr => [ ...prevArr, "-"])
    }
    
    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr}
        </div>
    )
}


/* Apples */
// function Counter(){
//     const [cart, setCart] = useState({
//         item: 'apple',
//         quantity: 0,
//     })

//     function addApple(){
//         setCart(prevCart => ({
//             ...prevCart, 
//             quantity: cart.quantity + 1,
//         }))
//     }
//     function removeApple(){
//         setCart(prevCart => ({
//             ...prevCart, 
//             quantity: cart.quantity - 1,
//         }))
//     }

    

//     return (
//         <div className="buttons">
//             <button onClick={removeApple} className="btn">-</button>
//             {cart.quantity}
//             {cart.item}
//             <button onClick={addApple} className="btn">+</button>
//         </div>
//     )
// }

/* simple counter */
// function Counter(){
//     const [counter, setCounter] = useState(0)
//     function incrementCounter(){
//         setCounter(counter + 1)
//     }
    
//     function decrementCounter(){
//         setCounter(counter - 1)
//     }

//     return (
//         <div className="buttons">
//             <button onClick={decrementCounter} className="btn">-</button>
//             {counter}
//             <button onClick={incrementCounter} className="btn">+</button>
//         </div>
//     )
// }

export default Counter