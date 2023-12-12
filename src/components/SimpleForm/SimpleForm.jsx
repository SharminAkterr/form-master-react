
const SimpleForm = () => {

    // onsubmit event handler use korar jnne full form er function
    const handleForm = e => {
        e.preventDefault();
        //page reload off kore. 
        // console.log('submitted');

        console.log(e.target.text.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="text" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;