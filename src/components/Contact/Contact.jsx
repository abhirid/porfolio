import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contact.module.css'
import foot from '../../images/cfooter.gif'

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
        
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Connect with me!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
        <a target="_blank" href="mailto:yadavabhishek9180@gmail.com">yadavabhishek9180@email.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={getImageUrl("contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a target="_blank" href="https://www.linkedin.com/in/abhishek-yadav-a09240205">linkedin.com/AbhishekYadav</a>
      </li>
      <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        <a target="_blank" href="https://www.github.com/abhirid">github.com/abhirid</a>
      </li>
    </ul>
    <img className={styles.img} width={250} src={foot} alt="" />
  </footer>
  )
}

export default Contact
