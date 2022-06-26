import styles from "../styles/TutorialCard.module.css";

interface ICard {
  tipo: string;
  titulo?: string;
  descripcion?: string;
  tiempo?: string;
}

export default function TutorialCard(props: ICard) {
  switch (props.tipo) {
    case "home":
      return (
        <div className={styles.container}>
          <h3 className={styles.titulo}>{props.titulo}</h3>
          <p className={styles.descripcion}>{props.descripcion}</p>
          <p className={styles.tiempo}>Tiempo estimado: {props.tiempo} min</p>
        </div>
      );
    case "nivel":
      return (
        <div className={styles.container}>
          <h3 className={styles.titulo}>{props.titulo}</h3>
          <svg></svg>
        </div>
      );
    case "tutorial":
      return (
        <div className={styles.container}>
          <h3 className={styles.titulo}>{props.titulo}</h3>
          <svg></svg>
        </div>
      );
    default:
      return <h1>Carta de tipo incorrecto</h1>;
  }
}
