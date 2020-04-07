import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import { ErrorIcon } from "../../../../icons";
//#region FORMS
const LoginForm = (props) => {

    const [error, setError] = useState("")
    const { history } = props;

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = formData => {
        trackPromise(
            axios.post("https://mirra-api.herokuapp.com/auth/login", formData)
                .then((res) => {
                    if (res.status === 200) {
                        const refreshToken = res.data.tokens.refreshToken;
                        const timeoutToken = res.data.tokens.timeoutToken;
                        const accessToken = res.data.tokens.accessToken;
                        if (!refreshToken || !timeoutToken || !accessToken) {
                            alert("something went wrong with logging in..")
                        }
                        // $__$ === { tokens } 
                        localStorage.setItem("_access", accessToken);
                        localStorage.setItem("_refresh", refreshToken);
                        localStorage.setItem("_timeout", timeoutToken);

                        setTimeout(() => { history.push("/dashboard"); }, 700)
                    }
                }).catch((err) => {
                    setError(`sorry ${formData.username}, no account found`)
                })
        )
    }

    const __schema = {
        username: {
            required: "Login with your Username"
        },
        password: {
            required: "Login with your password"
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
                type="password"
                name="password"
                ref={register(__schema.password)}
            />
            <div className="errors">
                {error.length > 0 ?
                    <div className="error-box">
                        <ErrorIcon />
                        <p className='error-text'>{error}</p>
                    </div>
                    : ""}

                {
                    errors.username &&
                    <div className="error-box">
                        <ErrorIcon />
                        <p className='error-text'>{errors.username.message}</p>
                    </div>
                }
                {
                    errors.password &&
                    <div className="error-box">
                        <ErrorIcon />
                        <p className='error-text'>{errors.password.message}</p>
                    </div>
                }

            </div>
            <button className="button">login</button>
        </form>
    )
}

export default LoginForm;