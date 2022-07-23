import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ITutorial from "../interfaces/ITutorial";

export default function TutorialPage() {
  const params = useParams();
  const location = useLocation();
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

  const filtrarPorId = (data: any) => {
    if (data.url == params.idtutorial) {
      return true;
    } else {
      return false;
    }
  };

  const tutoriales = data?.filter(filtrarPorId);
  const tutorial = tutoriales != null ? tutoriales[0] : null;

  return (
    <>
      <h1>dsadad</h1>
      <h1>{tutorial?.url}</h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jxT2HT7tF6g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}
