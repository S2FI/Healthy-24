import React from 'react'
import classes from './service.module.scss'
import service from '../../assets/service.png'
import hospital from '../../assets/hospital.png'
import GridCard from '../../components/grid/GridCard'
const Service = () => {
  return (
    <div className={classes.Service} id='services'>
      
      <div className={classes.Service__informations}>
          <div className={classes.Service__informations__text} >
            <header className={classes.Service__informations__text__header}>
                Find The Best doctor you need
            </header>
            <p>
            From rashes to colds, stress management to diabetes management, 
            individual treatment plans are created around you.
             Our medical and mental health providers work together,
              keeping your personal journey protected and connected.
            </p>
            <button> Get started </button>
          </div>
          <img className={classes.Service__informations__bgImage} src={service} alt='about'/>
      </div>
      <div className={classes.Service__grid}>
        <div className={classes.Service__grid__text}>
          <h1>
          We're here for you
          </h1>
          <p>
          Visits start at $79 for a 15 min consultation,
           or could be free depending on your insurance.
            See <a href="https://doctorondemand.com/about-us/cost/" target="_blank" rel="noreferrer">costs </a>  
             for more information.
          </p>
        </div>
        <div className={classes.Service__grid__cards}>
          <div className={classes.Service__grid__cards__rows}>
              <GridCard header='Cold & flu' />
              <GridCard header='Mental health' />
              <GridCard header='Mental health' />
          </div>
            
            <div className={classes.Service__grid__cards__columns}>
                <GridCard header='Headaches' />
                <GridCard header='Everyday care' />
                <GridCard header='Allergies' />
            </div>
            
        </div>
      </div>

      <div className={classes.Service__recommandation}>
          <img className={classes.Service__recommandation__bgImage} src={hospital} alt='hospital'/>

          <div className={classes.Service__recommandation__text} >
              <header className={classes.Service__recommandation__text__header}>
              Search the Nearest hospital from you
              </header>
            <p>
              Rumah sakit adalah bagian integral dari suatu organisasi sosial dan kesehatan dengan fungsi
              menyediakan pelayanan paripurna (komprehensif).
              </p>
              <button> Search</button>
          </div>
      </div>
    </div>
  )
}

export default Service