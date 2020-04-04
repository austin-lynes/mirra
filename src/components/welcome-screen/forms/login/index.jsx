import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
//#region FORMS
const LoginForm = (props) => {
    const { history } = props;

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = formData => {
        console.log(formData)
        trackPromise(
            axios.post('https://mirra-api.herokuapp.com/auth/login', formData)
                .then((res) => {
                    if (res.status === 200) {
                        const refreshToken = res.data.refreshToken;
                        const timeoutToken = res.data.timeoutToken;
                        if (!refreshToken || !timeoutToken) {
                            alert('something went wrong with logging in..')
                        }

                        localStorage.setItem('refreshToken', refreshToken);
                        localStorage.setItem('timeoutToken', timeoutToken);
                        
                        history.push('/dashboard');

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
        password: {
            required: 'create a password'
        }
    }
    return (
        <form className={`login`} onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <label htmlFor="username" >Username</label>
            <input
                name="username"
                ref={register(__schema.username)}
            />

            <label htmlFor="password">Password</label>
            <input
                type='password'
                name='password'
                ref={register(__schema.password)}
            />
            <div className='errors'>
                {
                    errors.username &&
                    <p className='error-box'>{errors.username.message}</p>
                }
                {
                    errors.password &&
                    <p className='error-box'>{errors.password.message}</p>
                }

            </div>
            <button className='button'>login</button>
        </form>
    )
}

export default LoginForm;