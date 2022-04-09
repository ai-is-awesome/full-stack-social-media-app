import React from "react";
import style from "./Loading.scss";

export default function Loading() {
  return <div className={`${style.loading} ${style.secondClass}`}>Loading</div>;
}
