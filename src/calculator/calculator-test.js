import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "./calculator.js";

describe("Calculator component", () => {
  it("renders the input field", () => {
    const { getByRole } = render(<Calculator />);
    const inputField = getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });

  it("displays the correct result when the equals button is clicked", () => {
    const { getByRole, getByText } = render(<Calculator />);
    const inputField = getByRole("textbox");
    const equalsButton = getByText("=");
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(equalsButton);
    expect(inputField).toHaveValue("7");
  });

  it("displays an error message when an invalid calculation is attempted", () => {
    const { getByRole, getByText } = render(<Calculator />);
    const inputField = getByRole("textbox");
    const equalsButton = getByText("=");
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText(")"));
    fireEvent.click(equalsButton);
    expect(inputField).toHaveValue("Error");
  });

  it("clears the input field when the clear button is clicked", () => {
    const { getByRole, getByText } = render(<Calculator />);
    const inputField = getByRole("textbox");
    const clearButton = getByText("Clear");
    fireEvent.click(getByText("5"));
    fireEvent.click(clearButton);
    expect(inputField).toHaveValue("");
  });

  it("deletes the last character when the backspace button is clicked", () => {
    const { getByRole, getByText } = render(<Calculator />);
    const inputField = getByRole("textbox");
    const backButton = getByText("C");
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("+"));
    fireEvent.click(backButton);
    expect(inputField).toHaveValue("5");
  });
});
