import { library } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import ReactDOM from "react-dom";
import ConversorMoedas from "./ConversorMoedas";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMocks from "axios";

describe("Teste do componente de conversão de moedas", () => {
  it("Deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Deve simular uma conversão de moedas", async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMocks.get.mockResolvedValueOnce({
      data: { success: true, rates: { BRL: 4.564292, USD: 1.101049 } },
    });
    fireEvent.click(getByTestId("btn-converter"));
    const modal = await findByTestId("modal");
    expect(axiosMocks.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent("1 BRL = 0.24 USD");
  });
});
