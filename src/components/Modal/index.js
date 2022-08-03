import React from 'react';
import ReactDOM from 'react-dom';
import classes from './styles.module.css';

export const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}/>
  );
}

export const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

export const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}
