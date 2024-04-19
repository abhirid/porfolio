import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'
function Hero() {
  return (
 <section className={styles.container}id='home'> 
    <div className={styles.content}>
        <h1 className={styles.title}>Hi,I am a Abhishek</h1>
        <p className={styles.description}>I am Front End Developer,I create beautiful responsive websites, and I love what I do.
</p>
<a className={styles.contactBtn} target="_blank" href="https://www.linkedin.com/in/abhishek-yadav-a09240205">Contact Me</a>
    </div>
    <img className={styles.heroImg} src={getImageUrl('hero/hero.gif')} alt="" />
 <div className={styles.topBlur}></div>

 
 </section>

  )
}

export default Hero
