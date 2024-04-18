"use client"
import { useState } from "react";
import styles from "./css/AutoSlider.module.css";

type Props = {
  images: string[]
}

export default function AutoSlider({ images }: Props) {
  const [index, setIndex] = useState<number>(0);

  setInterval(() =>{
    if (index === images.length-1) {
      setIndex(0);
    }
    else setIndex(index + 1);
  }, 5000)

  return (
    <div className={styles.autoslider}>
      <div 
        className={styles.autoslider__content}
        style={{ translate: `calc(-100% * ${index})`}}
      >
        {
          images.map((value, index) => (
            <img
              key={index}
              className={styles.autoslider__image}
              src={value}
              alt="guide image"
              loading="lazy"
            />
          ))
        }
      </div>
    </div>
  );
}