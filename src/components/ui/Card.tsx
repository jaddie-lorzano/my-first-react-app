import React from "react";
import style from "./Card.module.scss";

export function Card(props: { children: React.ReactNode }) {
  return (
    <>
      <div className={style.card}>{props.children}</div>
    </>
  );
}

export default Card;
