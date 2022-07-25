import React, { useState } from "react";
import styles from "../styles/Dropdown.module.css";

export default function Dropdown({
  selectedOption,
  setSelectedOption,
  options,
}: {
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownBtn}
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        {selectedOption != "" ? selectedOption : "Plataforma"}
        <svg
          width="12"
          height="7"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.166666 0.333313L6 6.99998L11.8333 0.333313H0.166666Z"
            fill="black"
          />
        </svg>
      </div>
      {isActive && (
        <div className={styles.dropdownContent}>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={(e) => {
                  setSelectedOption(e.currentTarget.textContent!);
                  console.log(e.currentTarget.textContent!);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
