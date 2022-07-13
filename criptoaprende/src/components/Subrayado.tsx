import { Children } from "react";
import styles from "../styles/Subrayado.module.css";

import { NavLink } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  animation: string;
  color: string;
  onClick?: any;
}

/**
 * ! Utilizar solo el verde para h1 y el resto para p
 * ! en los estilos el unico que es distinto es el
 * ! margin top en el ::after del onLoadGreen
 */

export default function Subrayado(props: Props) {
  switch (props.animation) {
    case "onLoad":
      return (
        <span
          onClick={props.onClick}
          className={
            props.color == "pink"
              ? styles.onLoadPink
              : props.color == "blue"
              ? styles.onLoadBlue
              : props.color == "purple"
              ? styles.onLoadPurple
              : props.color == "green"
              ? styles.onLoadGreen
              : ""
          }
        >
          {props.children}
        </span>
      );
    default:
      return <span>{props.children}</span>;
  }
}
