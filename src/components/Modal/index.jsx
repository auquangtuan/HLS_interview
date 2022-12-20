import React from 'react';
import './style.scss';
const Modal = ({ open, handleOpen, title, className, description, children }) => {
    return (
        <>
            {open && (
                <form className="ModalContainer">
                    <div className={`ModalForm ${className}`}>
                        <div className="closeForm" onClick={handleOpen}></div>
                        <h2 className="titleModal">{title}</h2>
                        <div className="description">{description}</div>
                        <div className="spliter"></div>
                        {children}
                    </div>
                </form>
            )}
        </>
    );
};

export default Modal;
