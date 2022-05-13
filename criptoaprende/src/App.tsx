import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";

function App() {
    return (
        <div className={styles.app}>
            <HeroSection />
        </div>
    );
}

export default App;
