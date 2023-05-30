import React from 'react'
import classes from './faq.module.scss'
import doctors from '../../assets/doctors.png'
const Faq = () => {
  return (
    <div className={classes.Faq}>
        <div className={classes.Faq__doctors}>
            <h1>
            Our secret to great virtual
            care is great doctors
            </h1>
            <p>Board-certified | Top 5% of medical specialists in the world | +90% satisfaction rating</p>
            <img src={doctors} alt="doctors" />

        </div>
    </div>
  )
}

export default Faq