import styles from "../styles/Card.module.css";
import { useNavigate } from "react-router-dom";

interface ICard {
  tipo: string;
  titulo?: string;
  descripcion?: string;
  imagen?: string;
  tiempo?: string;
  toURL?: string;
}

export default function TutorialCard(props: ICard) {
  const navigate = useNavigate();

  switch (props.tipo) {
    case "home":
      return (
        <div className={styles.containerHome}>
          <h3 className={styles.tituloHome}>{props.titulo}</h3>
          <p className={styles.descripcionHome}>{props.descripcion}</p>
          <p className={styles.tiempoHome}>
            Tiempo estimado: {props.tiempo} min
          </p>
        </div>
      );
    case "nivel":
      return (
        <div
          className={styles.containerNivel}
          onClick={() => {
            navigate(props.toURL as string);
          }}
        >
          <h3 className={styles.tituloNivel}>{props.titulo}</h3>
          <img src={props.imagen} className={styles.imagenNivel}></img>
        </div>
      );
    case "tutorial":
      return (
        <div className={styles.container}>
          <h3 className={styles.titulo}>{props.titulo}</h3>
        </div>
      );
    default:
      return <h1>Carta de tipo incorrecto</h1>;
  }
}
