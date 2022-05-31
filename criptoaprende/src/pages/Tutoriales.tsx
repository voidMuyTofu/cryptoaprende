import NavBar from "../components/NavBar";
import styles from "../styles/Tutoriales.module.css";

export default function Tutoriales() {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1 className={styles.titulo}>Tutoriales</h1>
        </div>
    );
}
