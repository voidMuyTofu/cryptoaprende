import styles from "../styles/Card.module.css";

interface ICard {
  tipo: string;
  titulo?: string;
  descripcion?: string;
  imagen?: string;
  tiempo?: string;
}

export default function TutorialCard(props: ICard) {
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
        <div className={styles.containerNivel}>
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
