import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Filtros from "../components/Filtros";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import Subrayado from "../components/Subrayado";
import ITutorial from "../interfaces/ITutorial";
import { fetchFromUrl, filterUniqueValues, titleCaseWord } from "../lib/utils";
import styles from "../styles/TutorialesPage.module.css";

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
  const [selectedPlataforma, setSelectedPlataforma] = useState("");
  const [selectedTiempo, setSelectedTiempo] = useState("");

  useEffect(() => {
    fetchFromUrl(urlFetch, data, setData);
  }, []);

  const getDropdownOptions = (tipo: string) => {
    const opciones: string[] = [];

    data?.map((data) => {
      if (tipo == "plataforma") {
        opciones.push(titleCaseWord(data.plataforma));
      } else if (tipo == "tiempo") {
        opciones.push(data.tiempo.toString() + " min");
      }
    });

    return opciones.filter(filterUniqueValues);
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Tutoriales</h1>
        <p className={styles.descripcion}>
          Aquí encontrarás todos los tutoriales de nivel{" "}
          <Subrayado animation="onLoad" color="blue">
            {props.nivel}
          </Subrayado>
        </p>
        <Filtros
          selectedPlataforma={selectedPlataforma}
          setSelectedPlataforma={setSelectedPlataforma}
          selectedTiempo={selectedTiempo}
          setSelectedTiempo={setSelectedTiempo}
          getDropdownOptions={getDropdownOptions}
        />
      </div>
    </>
  );
}
