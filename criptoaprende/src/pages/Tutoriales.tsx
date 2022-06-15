import NavBar from "../components/NavBar";
import styles from "../styles/Tutoriales.module.css";

export default function Tutoriales() {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.titulo}>Tutoriales</h1>
      <p>
        Elige el <div className={styles.subrayado}>nivel</div> que consideres
        que más se ajusta al tuyo
      </p>
    </div>
  );
}
