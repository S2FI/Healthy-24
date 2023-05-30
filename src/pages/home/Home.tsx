import React from 'react'
import classes from './home.module.scss'
import home from '../../assets/home.png'
import hands from '../../assets/hands.png'
import medic from '../../assets/first-aid.png'
import clock from '../../assets/clock.png'
import casque from '../../assets/casque.png'


import Cards from '../../components/Cards'
const Home = () => {
  return (
    <div className={classes.Home} id='home'> 
      <img className={classes.Home__bgImage} src={home} alt='home' />

      <div className={classes.Home__text} >
          <p className={classes.Home__text__first}> Feel Better about</p>

          <div className={classes.Home__text__second}>
            Finding 
            <p className={classes.Home__text__second__health}>
              Healthcare
              </p>
            </div> 
          <p className={classes.Home__text__third}>
             Healthy 24 Online ranks highest in telehealth satisfaction among direct-to-consumer brands.
            </p>
          <button> Get Started</button>        
      </div>
      <div className={classes.Home__cards}>
          <Cards text='Online' second_text='consultation' image={hands}/>
          <Cards text='Medical advice' second_text='and second opinions' image={medic}/>
          <Cards text='availability' second_text='24/7' image={clock}/>
          <Cards text='Health education' second_text='and resources' image={casque}/>
          </div>
    </div>
  )
}

export default Home