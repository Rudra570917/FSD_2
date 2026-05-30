import { useReducer, useState } from 'react'
export default function UR2() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, dispatch] = useReducer(reducer, 0)
    function reducer(state, action) {
        switch (action.type) {
            case "add":
                return num1 + num2
            case "subtract":
                return num1 - num2
            case "multiply":
                return num1 * num2
            case "divide":
                return num1 / num2
            default:
                return state
        }
    }
    return (
        <div>
            <h1>Result: {result}</h1>
            <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            <button onClick={() => dispatch({ type: "add" })}>Add</button>
            <button onClick={() => dispatch({ type: "subtract" })}>Subtract</button>
            <button onClick={() => dispatch({ type: "multiply" })}>Multiply</button>
            <button onClick={() => dispatch({ type: "divide" })}>Divide</button>
        </div>
    )
}