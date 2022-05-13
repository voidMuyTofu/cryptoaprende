import styles from "../styles/HeroSection.module.css";
export default function HeroSection() {
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Aprende </h1>
            <img src="../public/image_hero.svg" />
        </div>
    );
}
