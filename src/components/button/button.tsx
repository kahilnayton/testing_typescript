import React, { MouseEventHandler } from "react";
import "./button.css";

type Props = {
  onClick: MouseEventHandler;
  label: string;
};

const button = ({ onClick, label }: Props) => {
  return (
    <button onClick={onClick} data-testid="button" className="button-style">
      Yo {label}
    </button>
  );
};

export default button;
