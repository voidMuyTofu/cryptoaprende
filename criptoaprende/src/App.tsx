import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import TutorialesSection from "./components/TutorialesSection";

function App() {
  return (
    <div className={styles.app}>
      <HeroSection />
      <TutorialesSection />
    </div>
  );
}

export default App;
