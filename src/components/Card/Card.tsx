import React from "react";
import styles from "./Card.module.css"
import { CardButton } from "./CardButton/CardButton";

export type CardProps = {
    heading: string;
    content: string;
    buttonContent: string;
    onClick: () => void;
    isSelected: boolean;
}

export function Card({ heading, content, buttonContent, isSelected, onClick }: CardProps) {


    return (
        <div className={`${styles.card} ${isSelected ? styles.selectedCard : ""}`}>
            <div className={styles.img}>
                <img className={styles.img}
                    alt="The Bridge"
                    src="https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/brisbane_vgpzva.jpg" />
            </div>
            <div className={styles.text}>
                <h2>
                    {heading}
                </h2>
                <p>
                    {content}

                </p>
            </div>
            <div className={styles.button}>
                <CardButton onClick={onClick}>
                    {buttonContent}
                </CardButton>
            </div>
        </div >
    )
}