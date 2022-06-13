import styles from "./App.module.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className={styles.app}>
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
