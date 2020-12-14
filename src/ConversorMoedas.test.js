import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import ConversorMoedas from "./ConversorMoedas";

test("Deve renderizar o componente sem erros", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ConversorMoedas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
