import styles from "../styles/NavBar.module.css";
import { useRef, useState } from "react";

export default function NavBar() {
    const navRef = useRef(null);
    const onClickMenu = (event: any) => {
        debugger;
    };
    const [estaAbierto, setEstaAbierto] = useState(false);

    return (
        <header className={styles.header}>
            <h1 className={styles.titulo}>CryptoAprende</h1>
            <nav className={styles.nav} ref={navRef}>
                <svg
                    onClick={onClickMenu}
                    className={styles.svgClose}
                    viewBox="0 0 20 20"
                >
                    <path
                        fill="none"
                        d="M13.864,6.136c-0.22-0.219-0.576-0.219-0.795,0L10,9.206l-3.07-3.07c-0.219-0.219-0.575-0.219-0.795,0
								c-0.219,0.22-0.219,0.576,0,0.795L9.205,10l-3.07,3.07c-0.219,0.219-0.219,0.574,0,0.794c0.22,0.22,0.576,0.22,0.795,0L10,10.795
								l3.069,3.069c0.219,0.22,0.575,0.22,0.795,0c0.219-0.22,0.219-0.575,0-0.794L10.794,10l3.07-3.07
								C14.083,6.711,14.083,6.355,13.864,6.136z M10,0.792c-5.086,0-9.208,4.123-9.208,9.208c0,5.085,4.123,9.208,9.208,9.208
								s9.208-4.122,9.208-9.208C19.208,4.915,15.086,0.792,10,0.792z M10,18.058c-4.451,0-8.057-3.607-8.057-8.057
								c0-4.451,3.606-8.057,8.057-8.057c4.449,0,8.058,3.606,8.058,8.057C18.058,14.45,14.449,18.058,10,18.058z"
                    ></path>
                </svg>
                <ul className={styles.navItems}>
                    <li>
                        <a className={styles.a}>Tutoriales</a>
                    </li>
                    <li>
                        <a className={styles.a}>Plataformas</a>
                    </li>
                    <li>
                        <a className={styles.a}>Staking</a>
                    </li>
                </ul>
            </nav>
            <svg
                className={styles.svgMenu}
                viewBox="0 0 20 20"
                onClick={onClickMenu}
            >
                <path
                    fill="none"
                    d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
                ></path>
            </svg>
        </header>
    );
}
