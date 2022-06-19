import NavBar from "../components/NavBar";
import Subrayado from "../components/Subrayado";
import styles from "../styles/Tutoriales.module.css";

export default function Tutoriales() {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Tutoriales</h1>
        <p className={styles.descripcion}>
          Elige el{" "}
          <Subrayado animation="onLoad" color="pink">
            nivel
          </Subrayado>{" "}
          que consideres que más se ajusta al tuyo
        </p>
      </div>
    </div>
  );
}
