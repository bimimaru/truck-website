import React from "react"
import { useState } from "react"
import { Card, CardProps } from "../Card/Card"
import styles from './Body.module.css'


const items = [
    {
        content: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry.",
        buttonContent: "Button 1",
        heading: "Heading 1"
    },
    {
        content: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry.",
        buttonContent: "Button 2",
        heading: "Heading 2"
    },
    {
        content: "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley. Simply dummy text of the printing and typesetting industry.",
        buttonContent: "Button 3",
        heading: "Heading 3"
    },
]


export function Body() {

    const [selectedCard, setSelectedCard] = useState<number | undefined>(undefined);

    return (
        <div className={styles.body}>
            {
                items.map((item, index) => (
                    <Card
                        isSelected={selectedCard === index}
                        buttonContent={item.buttonContent}
                        content={item.content}
                        heading={item.heading}
                        onClick={() => {
                            setSelectedCard(index)
                        }}
                    />
                )
                )
            }
        </div>
    )
}