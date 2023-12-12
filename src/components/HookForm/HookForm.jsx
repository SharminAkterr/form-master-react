import useInputState from "../../hooks/useInputStates";

const HookForm = () => {
    // const [name, handleChange] = useInputState('Sharmin Mimi');
    const emailState = useInputState('mimi@sharmin.go');
    const passwordState = useInputState(null);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('hooked',name);
        // console.log(emailState.valueInput);
        console.log(emailState.value);
        console.log(passwordState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={name} onChange={handleChange} name="text" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input {...passwordState} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;