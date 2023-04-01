import { useState } from "react"


export const useCounter = (inicialValue = 0) => {

    const [state, setState] = useState(inicialValue)

    const increase = () => {
        setState(state + 1)
    }

    const decrease = () => {
        setState(state - 1)
    }

    const reset = () => {
        setState(0)
    }

    return [state, increase, decrease, reset]

}