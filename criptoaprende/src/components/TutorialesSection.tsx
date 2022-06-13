import styles from "../styles/TutorialesSection.module.css";
import TutorialCard from "./TutorialCard";

export default function TutorialesSection() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.blob1}
        width="228"
        height="217"
        viewBox="0 0 228 217"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200.264 20.2413C226.025 42.5214 224.915 79.0878 226.288 112.264C227.681 145.922 233.811 184.901 207.938 205.667C182.065 226.433 144.186 213.525 110.992 204.804C79.5547 196.545 48.3432 185.722 29.8512 158.88C7.90298 127.022 -9.36661 86.5751 6.19257 52.6875C21.7135 18.8832 63.6811 10.1506 101.004 3.91065C135.329 -1.8281 173.312 -3.0681 200.264 20.2413Z"
          fill="#F7E5B5"
        />
      </svg>
      <h1 className={styles.titulo}>Lo más popular</h1>
      <p className={styles.descripcion}>
        Esta es una selección de los tutoriales más populares. Puedes acceder a
        todos los tutoriales <span className={styles.subrayado}>aquí</span>
      </p>
      <TutorialCard
        titulo="Crea una cuenta en Coinbase"
        descripcion="Crea y verifica una cuenta en Coinbase"
        tiempo="5"
      />
      <TutorialCard
        titulo="Invierte usando Coinbase"
        descripcion="Realiza una inversión en una criptomoneda en Coinbase"
        tiempo="10"
      />
      <TutorialCard
        titulo="Invierte en una criptomoneda en Coinbase"
        descripcion="Realiza una inversión en la moneda que prefieras utilizando el exchange de criptomonedas de Coinbase"
        tiempo="5"
      />
    </div>
  );
}
