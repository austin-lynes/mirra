import React from 'react';
import IconButton from '../icon-button';
import { CloseMini } from '../../icons';

const Modal = (props) => {
    const { visible, children, isLogin, close } = props
    if (!visible) {
        return null
    }
    return (
        <div className='modal'>
            <div className='backdrop'></div>
            <div className={`popup ${isLogin ? 'small' : ''}`}>
                <IconButton onClick={close} Icon={<CloseMini />} />
                {children}
            </div>
        </div>
    );
};


export default Modal;