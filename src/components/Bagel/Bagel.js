import React from "react";
import bagel from "../../assets/bagel.png";
import { useState } from "react";

export default function Bagel(props) {
  const [bagelMoves, setBagelMoves] = useState({
    x: positionGenerator() * 92,
    y: positionGenerator() * 90,
    vx: moveGenerator() * 3,
    vy: moveGenerator() * 3,
  });

  function positionGenerator() {
    let number = Math.random();
    return number;
  }

  function moveGenerator() {
    let number = Math.random() * 2 - 1;
    return number;
  }
  let inter = setTimeout(() => {
    let bmx = bagelMoves.x;
    let bmy = bagelMoves.y;
    let bmvx = bagelMoves.vx;
    let bmvy = bagelMoves.vy;

    if (bmx < 0 || bmx > 92) {
      bmx = bmx;
      bmy = bmy + bmvy;
      bmvx = -bmvx;
      bmvy = bmvy;
    }

    if (bmy < 0 || bmy > 90) {
      bmx = bmx + bmvx;
      bmy = bmy - bmvy;
      bmvx = bmvx;
      bmvy = -bmvy;
    } else {
      bmx += bmvx;
      bmy += bmvy;
      bmvx = bmvx;
      bmvy = bmvy;
    }

    setBagelMoves({
      x: bmx,
      y: bmy,
      vx: bmvx,
      vy: bmvy,
    });
    return () => clearInterval(inter);
  }, 50);

  return (
    <div>
      <img
        src={bagel}
        id={props.bagelID}
        className="bagel"
        style={{ top: `${bagelMoves.y}%`, left: `${bagelMoves.x}%` }}
      ></img>
    </div>
  );
}
