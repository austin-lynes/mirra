import React, { useState, useRef, useEffect } from "react";
import Modal from "../../mirra-ui/modal";

import RegisterForm from "./forms/register";
import LoginForm from "./forms/login";

const WelcomeScreen = (props) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [registerVisible, setRegisterVisible] = useState(false);

    const setLoginActive = () => {
        if (registerVisible)
            setRegisterVisible(false)
        setLoginVisible(true)
    }

    const setRegisterActive = () => {
        if (loginVisible)
            setLoginVisible(false)
        setRegisterVisible(true)

    }

    const closeModal = () => {
        if (registerVisible)
            setRegisterVisible(false)
        if (loginVisible)
            setLoginVisible(false)
    }


    return (
        <div className={`welcome`}>

            <Modal visible={loginVisible} close={closeModal} isLogin={true}>
                <LoginForm  {...props} />
            </Modal>
            <Modal visible={registerVisible} close={closeModal}>
                <RegisterForm  {...props} setLoginVisible={setLoginActive} />
            </Modal>

            <h2 data-testid="welcome-banner" className="welcome banner">Welcome to Mirra!</h2>
            <div className="buttons">
                <button data-testid="button" onClick={setLoginActive}>Login</button>
                <button data-testid="button" onClick={setRegisterActive}>Register</button>
            </div>

        </div>
    );
};


//#endregion


export default WelcomeScreen;