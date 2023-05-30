import React from 'react'
import classes from './about.module.scss'
import about from '../../assets/about-us.png'
import recommand from '../../assets/recommand.png'
import logo from '../../assets/title_logo.png'
import store from '../../assets/App-Store.png'
import play from '../../assets/Google-Play.png'
import stars from '../../assets/stars.png'
import {AiOutlineCheck} from 'react-icons/ai'
const About = () => {
  return (
    <div className={classes.About} id='about'>
      <div className={classes.About__informations}>
          <div className={classes.About__informations__text} >
            <header className={classes.About__informations__text__header}>
                About 
                <img src={logo} alt='logo'/>
            </header>
            <p>
                With 24/7 access to online doctors, psychiatrists, psychologists, therapists and other medical experts, care is always available,
                anytime and anywhere.<br/>
                Select and see your favorite providers again and again, right from your smartphone, tablet or computer.
                <br/><br/>
                Better yet, Doctor On Demand is a covered benefit for over 98 million Americans by their health plan or employer.
                It’s free to sign up and easy to check your coverage when you register.
            </p>
            
          </div>
          <img className={classes.About__informations__bgImage} src={about} alt='about'/>
      </div>
      <div className={classes.About__recommandation}>

        <img className={classes.About__recommandation__bgImage} src={recommand} alt='recommand'/>

          <div className={classes.About__recommandation__text} >
              <header className={classes.About__recommandation__text__header}>
                Why choosing
                <img src={logo} alt='logo'/>
              </header>
            
              <p>
                Meet with an urgent care doctor in minutes, 24/7.Schedule a session with a 
                <a href='https://doctorondemand.com/what-we-treat/mental-health/' target="_blank" rel="noreferrer" >therapist or psychiatrist</a> 
                this week.
              </p>
            <div className={classes.About__recommandation__text__list}>
              <ul>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        Experienced and Professional Team
                      </li>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        Comprehensive Services
                      </li>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        User-Friendly Interface
                      </li>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        Safe and Secure Data Storage
                      </li>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        Personalized Care
                      </li>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        Positive Reputation
                      </li>
                      <li>
                        <AiOutlineCheck className={classes.About__recommandation__text__list__icons}/>
                        Convenient Access to Healthcare Services
                      </li>
              </ul>
            </div>

          </div>
      </div>
      <div className={classes.About__app}>
        <div className={classes.About__app__text}>
          <h1>
            Get the app
          </h1>
          <h5>
          Rated 4.9 out of 5 by more than 150k reviewers.
          </h5>
          <p>
          Register in the app and be ready to see a doctor, therapist or psychiatrist anytime, anywhere. Available for iPhone and Android
          </p>
        </div>
        <div className={classes.About__app__icons}>
            <div className={classes.About__app__icons__logo}>
              <img src={store} alt="app store" />
              <img src={play} alt="google play" />
            </div>
            <div className={classes.About__app__icons__stars}>
              4.9 
              <img src={stars} alt="rating" />
            </div>
            <p>
                190.7k Rating
            </p>
        </div>
      </div>
    </div>
  )
}

export default About