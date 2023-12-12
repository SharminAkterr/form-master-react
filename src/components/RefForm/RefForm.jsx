
import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleForm = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
    }


    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" ref={nameRef} name="text" />
                <br />
                <input type="email" ref={emailRef} defaultValue={'mimisharmin@gmail.com'} name="email" />
                <br />
                <input ref={passRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;