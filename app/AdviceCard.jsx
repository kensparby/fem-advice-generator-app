"use client";
import Image from "next/image";
import styles from "./AdviceCard.module.css";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { fetchAdvice } from "./actions";

const imageStyles = {
  maxWidth: "295px",
  margin: "auto",
};

export default async function AdviceCard() {
  const [advice, setAdvice] = useState();
  console.log(advice)

  const handleClick = () => {
    fetchAdvice().then((data) => {
      setAdvice(data.slip);
    });
  };

  useEffect(() => {
    fetchAdvice().then((data) => {
      setAdvice(data.slip);
    });
  }, []);

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>
        {(advice && `Advice #${advice?.id}`) || ""}
      </h3>
      <blockquote className={styles.text}>
        <p>{advice?.advice}</p>
      </blockquote>
      <div className={styles.imageContainer}></div>
      <button onClick={handleClick} className={styles.button}></button>
    </div>
  );
}
