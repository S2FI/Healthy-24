import React from 'react'
import classes from './gridcard.module.scss'
import peach from '../../assets/peach.png'

interface myGridProps {
  header :string;
}

const GridCard :React.FC <myGridProps> = (props) => {
  return (
    <div className={classes.grid}>
        <div className={classes.grid__header}>
          <p>
              {props.header}
          </p>
          <img src={peach} alt="peach" />
        </div>
          <ul>
              <li>Cough</li>
              <li>Headaches</li>
              <li>Nausea & vomiting</li>
              <li>Fever</li>
          </ul>
        </div>
  )
}

export default GridCard