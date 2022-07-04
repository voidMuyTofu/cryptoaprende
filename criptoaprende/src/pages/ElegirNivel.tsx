import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Subrayado from "../components/Subrayado";
import styles from "../styles/ElegirNivel.module.css";
import iconoPrincipiante from "../public/icono_principiante.svg";
import iconoIntermedio from "../public/icono_intermedio.svg";
import iconoAvanzado from "../public/icono_avanzado.svg";
import { Outlet } from "react-router-dom";

export default function ElegirNivel() {
    return (
        <div>
            <Outlet></Outlet>
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
                    toURL="/tutoriales/principiante"
                />
                <Card
                    tipo="nivel"
                    titulo="Intermedio"
                    imagen={iconoIntermedio}
                    toURL="/tutoriales/intermedio"
                />
                <Card
                    tipo="nivel"
                    titulo="Avanzado"
                    imagen={iconoAvanzado}
                    toURL="/tutoriales/avanzado"
                />
            </div>
        </div>
    );
}
