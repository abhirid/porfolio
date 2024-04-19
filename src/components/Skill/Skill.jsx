import React from "react";
import skills from "../../data/skill.json";
import { getImageUrl } from "../../utils";
import styles from './Skill.module.css'
function Skill() {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.size}>
      <h2 className={styles.title}>Skills</h2>
     <p className={styles.p}>
        As a frontend developer, I bring a solid foundation in HTML, CSS, and
        JavaScript, complemented by hands-on experience with modern frameworks
        like React.js.I enjoy making websites look good and easy to use. I'm
        eager to learn new things and work well in teams.
      </p>
      </div>
    
      <div className={styles.content}>
        <div className={styles.skills}>
            {skills.map((skill,id)=>{
                return(
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImage}>
                        <img width={50} src={getImageUrl(skill.imageSrc)} alt={skill.title} />

                        </div>
                        <p>{skill.title}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default Skill;
