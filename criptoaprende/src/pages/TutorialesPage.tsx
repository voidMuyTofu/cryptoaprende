import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Subrayado from "../components/Subrayado";
import ITutorial from "../interfaces/ITutorial";
import styles from "../styles/Tutoriales.module.css";

interface ITutorialesPage {
  url: string;
  nivel: string;
}

export default function Tutoriales(props: ITutorialesPage) {
  const nivel = location.pathname.split("/", 3)[2];
  const urlFetch =
    nivel == "principiante"
      ? import.meta.env.VITE_API_PRINCIPIANTE
      : nivel == "intermedio"
      ? import.meta.env.VITE_API_INTERMEDIO
      : nivel == "avanzado"
      ? ""
      : import.meta.env.VITE_API_AVANZADO;
  const [data, setData] = useState<ITutorial[]>();

  useEffect(() => {
    fetch(urlFetch)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: El status es ${response.status}`);
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
      })
      .catch((err) => {
        setData([]);
        console.log(err.message);
      });
  }, []);

  debugger;
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Tutoriales</h1>
        <p>
          Aquí encontrarás todos los tutoriales de nivel{" "}
          <Subrayado animation="onLoad" color="purple">
            {props.nivel}
          </Subrayado>
        </p>
      </div>
    </>
  );
}
