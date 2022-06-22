import styles from "../styles/TutorialCard.module.css";

interface ICard {
  tipo: string;
  titulo?: string;
  descripcion?: string;
  tiempo?: string;
}

export default function TutorialCard({ titulo, descripcion, tiempo }: any) {
  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.tiempo}>Tiempo estimado: {tiempo} min</p>
    </div>
  );
}
