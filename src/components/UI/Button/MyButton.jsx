import React from 'react'
import classes from './MyButton.module.css';

export const MyButton = ({children, ...props}) => { //...Люмые другие пропсы типа..
  return (
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
  )
}
