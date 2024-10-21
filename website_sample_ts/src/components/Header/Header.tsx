import React from "react";
import styles from './Header.module.css'
import { CardButton } from "../Card/CardButton/CardButton";

export function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.bgImg}>
                <img className={styles.bgImg} src="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg" />
            </div>
            <div className={styles.content}>
                <h1 className={styles.heading} >
                    Welcome to G Automotive
                </h1>
                <p className={styles.text}>
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className={styles.button}>
                    <CardButton onClick={() => alert('hello')}>
                        Contact Us
                    </CardButton>
                </div>
            </div>
        </div>
    )
}