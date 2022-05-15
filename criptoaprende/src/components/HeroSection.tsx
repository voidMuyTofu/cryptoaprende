import styles from "../styles/HeroSection.module.css";
import image from "../public/hero.svg";
export default function HeroSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        Iniciate en el mundo de las{" "}
        <span className={styles.subrayado}>criptos</span>
      </h1>
      <p className={styles.description}>
        Aprende los primeros pasos para invertir en criptomonedas. Aquí te
        enseñamos a crear y validar una cuenta en un exchange, a como invertir
        en tu primera cripto, o incluso a ganar intereses por las criptomondeas
        que ya tienes. Echa un vistazo a los tutoriales más populares justo
        debajo.
      </p>
      <img src={image} className={styles.heroImage} />
    </div>
  );
}
