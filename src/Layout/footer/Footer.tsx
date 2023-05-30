import React from 'react'
import classes from './footer.module.scss'
import FloatingBtn from '../../components/floatingBtn/FloatingBtn'
const Footer = () => {
  return (
    <div className={classes.footer}>
       <p>Healthy 2023 ©</p> 
       <FloatingBtn />
       
       </div>
  )
}

export default Footer