import Button from "../../Button/Button";

const FormCallback = () => {
    return (
        <>
        <h1>Interested in services?</h1>
                <p>Enter your contact details and we will call you</p>

                <form >
                    <label>
                        <input type="text" required placeholder='Name' />
                    </label>

                    <label>
                        <input type="text" required placeholder='Phone number' />
                    </label>

                    <Button>Get a call</Button>
                </form>
            </>
    );
}
 
export default FormCallback;