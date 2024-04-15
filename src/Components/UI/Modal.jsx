
import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClosed}></div>
}

const ModalOverlay = (props) =>{
    return (<div className={classes.modal}>
    <div className={classes.content}>{props.children}</div>
    </div>)
}

const divElement = document.getElementById('overlays')

export default function Modal(props) {
  return (
    <>
   {ReactDOM.createPortal(<Backdrop onClosed={props.onClosed}/>, divElement)}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, divElement)}
    </>
  )
}
