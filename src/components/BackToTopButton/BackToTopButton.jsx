// import React, { useEffect, useState } from 'react'
import css from "./BackToTopButton.module.css";
import { useWindowScrollPosition } from "../../hooks/useWindowScrollPosition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const BackToTopButton = () => {
  const { scrollY } = useWindowScrollPosition();

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {scrollY > 100 && (
        <button className={css.backToTop} onClick={scrollUp}>
          <FontAwesomeIcon icon={faArrowUp} size="xs" className={css.arrowUp} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
