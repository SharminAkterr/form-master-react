import SignUpForm from "../SignUpForm/SignUpForm";

const ReusableForm = () => {

    const handleSignUpForm = data => {
        console.log('Sign Up form data', data);
    }

    const handleUpdateForm = data => {
        console.log('Updated Profile data', data);
    }

    return (
        <div>
            <SignUpForm
                formTitle={'Sign Up Form'}
                handleSubmit={handleSignUpForm}>
                <div>
                    <p>Please Sign Up right now !!!</p>
                </div>
            </SignUpForm>

            <SignUpForm
                formTitle={'Update Profile'}
                submitBtnText="Update"
                handleSubmit={handleUpdateForm}>
                <div>
                    <p>Please Update your Profile !!!</p>
                </div>
            </SignUpForm>
        </div>
    );
};

export default ReusableForm;