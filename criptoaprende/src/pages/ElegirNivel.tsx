import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Subrayado from "../components/Subrayado";
import styles from "../styles/ElegirNivel.module.css";
import data from "../data/Categorias";
import iconoPrincipiante from "../public/icono_principiante.svg";
import iconoIntermedio from "../public/icono_intermedio.svg";
import iconoAvanzado from "../public/icono_avanzado.svg";

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
        <Card
          tipo="nivel"
          titulo="Principiante"
          imagen={iconoPrincipiante}
          to="/tutoriales/principiante"
        />
        <Card
          tipo="nivel"
          titulo="Intermedio"
          imagen={iconoIntermedio}
          to="/tutoriales/intermedio"
        />
        <Card
          tipo="nivel"
          titulo="Avanzado"
          imagen={iconoAvanzado}
          to="/tutoriales/avanzado"
        />
      </div>
    </div>
  );
}
