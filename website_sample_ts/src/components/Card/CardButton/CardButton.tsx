import React from "react";
import styles from './CardButton.module.css';

type CardButtonProps = React.PropsWithChildren & { onClick: () => void }

export function CardButton({ children, onClick }: CardButtonProps) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button >
    )
}