import React from 'react'
import styles from "./Card.module.css"

export default function Card({name, phone,email,image}) {
  return (
    <div className={styles.card}>
         <div className={styles["card-header"]}></div>
          <img src={image.url} alt={image.alt} className={styles["card-img"]} />
        <div className=''>
          <h3>{name}</h3>
          <p>{phone}</p>
          <p>{email}</p>
        </div>
    </div>
  )
}
