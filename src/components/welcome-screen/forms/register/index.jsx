import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

const RegisterForm = (props) => {
    const { setLoginVisible } = props;
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = formData => {
        console.log(formData)
        trackPromise(
            axios.post('https://mirra-api.herokuapp.com/auth/register', formData)
                .then((res) => {
                    if (res.status === 201) {
                        setLoginVisible();
                    }
                }).catch((err) => {
                    alert('REGISTER ERROR:=>', err)
                })
        )
    }

    const __schema = {
        username: {
            required: 'Create a Username  EX.  XxMirraBot124xX'
        },
        email: {
            required: 'enter your email',
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
            }
        },
        password: {
            required: 'create a password'
        }
    }

    return (
        <form className={`register`} onSubmit={handleSubmit(onSubmit)}>
            <h1>Register</h1>

            <label htmlFor="username" >Username</label>
            <input
                name="username"
                ref={register(__schema.username)}
            />

            <label htmlFor="email">Email</label>
            <input
                name="email"
                ref={register(__schema.email)}
            />

            <label htmlFor="password">Password</label>
            <input
                type='password'
                name='password'
                ref={register(__schema.password)}
            />

            <button className='button'>create an account</button>

            <div className='errors'>
                {
                    errors.username &&
                    <p className='error-box'>{errors.username.message}</p>
                }
                {
                    errors.email &&
                    <p className='error-box'>{errors.email.message}</p>
                }
                {
                    errors.password &&
                    <p className='error-box'>{errors.password.message}</p>
                }

            </div>

        </form>
    );
};

export default RegisterForm;