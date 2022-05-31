import styles from "../styles/NavBar.module.css";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
    const buttonStyle = {
        color: "black",
        fontSize: "1.2em",
        textDecoration: "none",
        fontWeight: "300",
    };
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
        <div className={styles.todo}>
            <div className={styles.navbar}>
                <div className={styles.content}>
                    <h1 className={styles.titulo}>CryptoAprende</h1>
                    <svg
                        onClick={onClickMenu}
                        className={styles.hamburgerMenu}
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M35 30H15V26.6667H35V30ZM35 21.6667H5V18.3333H35V21.6667ZM35 13.3333H15V10H35V13.3333Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
            <div
                className={isClosed ? styles.botonera : styles.botoneraAbierta}
            >
                <NavLink
                    className={(isActive) =>
                        isActive ? styles.botonesActive : styles.botones
                    }
                    to="/"
                >
                    Inicio
                </NavLink>
                <NavLink
                    to="/tutoriales"
                    className={(isActive) =>
                        isActive ? styles.botonesActive : styles.botones
                    }
                >
                    Tutoriales
                </NavLink>
                <NavLink
                    to="/plataformas"
                    className={(isActive) =>
                        isActive ? styles.botonesActive : styles.botones
                    }
                >
                    Plataformas
                </NavLink>
            </div>
        </div>
    );
}
