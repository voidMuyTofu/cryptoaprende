import styles from "../styles/HeroSection.module.css";
import image from "../public/hero3.svg";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        Iniciate en el mundo de las{" "}
        <span className={styles.subrayado}>criptos</span>
      </h1>
      <p className={styles.descripcion}>
        Aprende los primeros pasos para invertir en criptomonedas. Crea una
        cuenta, invierte en tu primera cripto, e incluso gana intereses por tus
        criptomonedas.
      </p>
      <button
        className={styles.botonTutoriales}
        onClick={() => {
          navigate("/tutoriales");
        }}
      >
        TUTORIALES
      </button>
      <img src={image} className={styles.heroImage} />
    </div>
  );
}
