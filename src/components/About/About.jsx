import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
function About() {
  return (
  <section className={styles.container} id='about'>
    
    <div className={styles.content}>
    <h2 className={styles.title}>About Me</h2>
        <img src={getImageUrl('about/think.gif')} className={styles.aboutImage} alt="" />
        </div>
        <div>
        <div className={styles.p}>
        <p >
       Hello I’m Abhishek Yadav a developer who has passion for building
              clean web applications with intuitive functionality. I enjoy the
              process of turning ideas into reality using creative solutions.
              I’m always curious about learning new skills, tools, and concepts.
            </p>{" "}
            <br />
            <p>
              {" "}
              I’m currently looking for a position as a frontend developer in an
              estemeed organization where I can learn and grow with the company.
              I’m open for learning and solving challenges using my skills and
              provide value to the growth of an organization.
            </p>
       </div>
        </div>
       
       
            
   
  </section>
  )
}

export default About
