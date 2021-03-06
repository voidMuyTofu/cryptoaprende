import styles from "../styles/TutorialesSection.module.css";
import Subrayado from "./Subrayado";
import TutorialCard from "./Card";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IHomeTutoriales {
  id: number;
  url: string;
  titulo: string;
  descripcion: string;
  tiempo: string;
}

export default function TutorialesSection() {
  const [data, setData] = useState<IHomeTutoriales[]>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(import.meta.env.VITE_API_POPULARES)
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
        todos los tutoriales{" "}
        <Subrayado
          animation="onLoad"
          color="blue"
          onClick={() => navigate("/tutoriales")}
        >
          aquí
        </Subrayado>
      </p>
      <div className={styles.cardContainer}>
        {data?.map((tutorial) => {
          return (
            <Link
              key={tutorial.id}
              to={`/tutoriales/principiante/${tutorial.url}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <TutorialCard
                key={tutorial.id}
                tipo="home"
                titulo={tutorial.titulo}
                descripcion={tutorial.descripcion}
                tiempo={tutorial.tiempo}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
