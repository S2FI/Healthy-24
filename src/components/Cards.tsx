import React from 'react'
import classes from './cards.module.scss'


interface MyComponentProps {
  text: string;
  second_text: string;
  image: string;
}

const Cards: React.FC<MyComponentProps> = ({text,second_text,image}) => {
  return (
    <div className={classes.cardContainer}>
      <img src={image} alt='services'/> 
      <p>
       {text}<br/>{second_text}
      </p>
       
    </div>
  )
}

export default Cards