import React from "react";
import IFiltros from "../interfaces/IFiltros";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";
import styles from "../styles/Filtros.module.css";

export default function Filtros(props: IFiltros) {
  return (
    <>
      <div className={styles.filtros}>
        <Dropdown
          selectedOption={props.selectedPlataforma}
          setSelectedOption={props.setSelectedPlataforma}
          options={props.getDropdownOptions("plataforma")}
          tipo="plataforma"
        />
        <Dropdown
          selectedOption={props.selectedTiempo}
          setSelectedOption={props.setSelectedTiempo}
          options={props.getDropdownOptions("tiempo")}
          tipo="tiempo"
        />
      </div>
      <SearchBar />
    </>
  );
}
