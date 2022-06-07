import { useState } from "react"
function Carrito({stock, initial}){
    const [ count, setCount  ] = useState((initial= 0))

    function agregar() {
        //count= count + 1 / count ++
        setCount(count + 1)
        if (count >= (10)) {
            setCount(count - 1)
        }
    }
    function restar() {
        
        setCount(count - 1)
        if (count < (0)) {
        setCount(count + 1)
                  
        }
    }
    return (
        <div>
            <h2>la cantidad es = {count} </h2>
            <button onClick={agregar}>SUMAR</button>
            <button onClick={restar} id='botond'>RESTAR</button>

        </div>
    )
}

export default Carrito