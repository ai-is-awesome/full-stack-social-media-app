import React from "react";
import "./Loading.scss";

export default function Loading({ inline }) {
  return <div className={"loading " + inline ? "inline" : ""}>Loading</div>;
}
