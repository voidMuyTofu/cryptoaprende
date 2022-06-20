import { Children } from "react";
import styles from "../styles/Subrayado.module.css";

interface Props {
    children: React.ReactNode;
    animation: string;
    color: string;
}

export default function Subrayado(Props: Props) {
    switch (Props.animation) {
        case "onLoad":
            return (
                <span
                    className={
                        Props.color == "pink"
                            ? styles.onLoadPink
                            : Props.color == "blue"
                            ? styles.onLoadBlue
                            : Props.color == "purple"
                            ? styles.onLoadPurple
                            : Props.color == "green"
                            ? styles.onLoadGreen
                            : ""
                    }
                >
                    {Props.children}
                </span>
            );
        default:
            return <span>{Props.children}</span>;
    }
}
