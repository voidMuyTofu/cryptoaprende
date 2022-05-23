import styles from "../styles/NavBar.module.css";
import { useRef, useState } from "react";

export default function NavBar() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const onClickMenu = (event: any) => {
        setIsClosed((prevCheck) => !prevCheck);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.content}>
                <h1>CryptoAprende</h1>
                <ul className={styles.menuList}>
                    <li>Tutoriales</li>
                    <li>Tutoriales</li>
                    <li>Tutoriales</li>
                    <li>Tutoriales</li>
                </ul>
            </div>
        </nav>
    );
}
