import { useState } from "react";

const StatefulForm = () => {
    const [name, setName] = useState('Mimi');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 4) {
            setError('Your password is less than 4')
        }
        else {
            setError('');
            console.log(name, email, password);
        }
    }

    const handleText = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleText} type="text" name="text" value={name} />
                <br />
                <input onChange={handleEmail} type="email" name="email" defaultValue={'mimi@gmail.com'} />
                <br />
                <input onChange={handlePassword} type="password" name="password" id="" required />
                <br />
                <input type="submit" value="submit" />
                <div>
                    {
                        error && <p>{error}</p>
                    }
                </div>
            </form>
        </div>
    );
};

export default StatefulForm;