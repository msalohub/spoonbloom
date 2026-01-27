import { useState } from "react";
import styles from "../styles/Shop.module.css";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);
  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div className={styles.carousel}>
      <button className={styles.arrow} onClick={prev}>‹</button>

      <img
        src={images[index]}
        className={styles.productImg}
        draggable={false}
        alt=""
      />

      <button className={styles.arrow} onClick={next}>›</button>
    </div>
  );
}
