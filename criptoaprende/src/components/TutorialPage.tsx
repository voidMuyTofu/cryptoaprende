import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function TutorialPage() {
  const params = useParams();
  useEffect(() => {
    //Hacer fetch aqui con el parametro de la url params.idtutorial
  }, []);
  return <h1>sdfsdfdsdsf</h1>;
}
