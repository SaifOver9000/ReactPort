import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Saif</h1>
            <p className={styles.description}>I am a full stack developer with experience in React, and NodeJS and many more programming languages,  Please Reach out if you  want to collaborate</p>
            <a className={styles.contactBtn}href="mailto:saifmiskin9@gmail.com">Contact me</a>
        </div>
            <img className={styles.heroImg} src={getImageUrl("hero/updatedHero.png")} alt="Hero image of me" />

            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        
    </section>
};