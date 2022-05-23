import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import TutorialesSection from "./components/TutorialesSection";

function App() {
    return (
        <div className={styles.app}>
            <NavBar />
            <HeroSection />
            <TutorialesSection />
        </div>
    );
}

export default App;
