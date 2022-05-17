import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {
    const [setEmail, setFormEmail] = useState([{
        name: "",
        email: "",
        message: "",

    }]);

    const [errorMessage, setErrorMessage] = useState("");

    const {name, email, message} = setEmail;

    function setAuthentication(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is valid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('')
                }
            }
        }
        if (!errorMessage) {
            setFormEmail({...setEmail, [e.targer.name] : e.target.value})
        }
    }

    function setHandle(e) {
        if (e.target.name === 'Name' || e.target.name === 'Message') {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('')
            }
        }
        if (!errorMessage) {
            setFormEmail({...setEmail, [e.target.name]: e.target.value})
        }
    }

    return (
        <section>
            <div className='center'>
                <h2 className='page-header'>Contacted Me</h2>
            </div>
            <div>
                <form id='contact-form'>
                    <div>
                        <label htmlFor='Name'>Name:</label>
                        <br></br>
                        <input 
                        type='text'
                        defaultValue={name}
                        onBlur={setHandle}
                        name='Name'
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email adress:</label>
                        <br></br>
                        <input 
                        type='email'
                        defaultValue={email}
                        onBlur={setAuthentication}
                        name='email'
                        />
                    </div>
                    <div>
                        <label htmlFor='Message'>Message:</label>
                        <br></br>
                        <textarea
                        name='Message'
                        defaultValue={message}
                        onBlur={setHandle}
                        rows='5'
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button type='submit'>Submit</button>



                </form>
            </div>
        </section>
    )
}

export default Contact;