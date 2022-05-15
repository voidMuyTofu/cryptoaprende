import styles from "../styles/NavBar.module.css";
import { useRef, useState } from "react";

export default function NavBar() {
  const navRef = useRef(null);
  const onClickMenu = (event: any) => {
    setIsClosed((prevCheck) => !prevCheck);
  };
  const [isClosed, setIsClosed] = useState(true);

  return (
    <header className={styles.header}>
      <h1 className={styles.titulo}>CryptoAprende</h1>
      <nav className={isClosed ? styles.nav : styles.openNav} ref={navRef}>
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
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        onClick={onClickMenu}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </header>
  );
}
