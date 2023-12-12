import { useState } from "react"

const useInputState = (defaultValue = null) => {
    // const [valueInput, setValueInput] = useState(defaultValue);
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        // setValueInput(e.target.value);
        setValue(e.target.value);
    }
    return {
        // valueInput,
        value,
        onChange
    }
    
}

export default useInputState;