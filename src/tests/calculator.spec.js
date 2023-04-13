import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("Calculator component", () => {
  it("renders the calculator with all buttons", () => {
    const { getByText } = render(<Calculator />);
    expect(getByText("Clear")).toBeInTheDocument();
    expect(getByText("C")).toBeInTheDocument();
    expect(getByText("÷")).toBeInTheDocument();
    expect(getByText("7")).toBeInTheDocument();
    expect(getByText("8")).toBeInTheDocument();
    expect(getByText("9")).toBeInTheDocument();
    expect(getByText("×")).toBeInTheDocument();
    expect(getByText("4")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("6")).toBeInTheDocument();
    expect(getByText("-")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("+")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();
    expect(getByText(".")).toBeInTheDocument();
    expect(getByText("=")).toBeInTheDocument();
  });

  it("performs addition", () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    expect(getByDisplayValue("3")).toBeInTheDocument();
  });

  it("performs subtraction", () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText("4"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    expect(getByDisplayValue("2")).toBeInTheDocument();
  });

  it("performs multiplication", () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("×"));
    fireEvent.click(getByText("4"));
    fireEvent.click(getByText("="));
    expect(getByDisplayValue("12")).toBeInTheDocument();
  });

  it("performs division", () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText("9"));
    fireEvent.click(getByText("÷"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByDisplayValue("3")).toBeInTheDocument();
  });

  it("clears the result", () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    fireEvent.click(getByText("C"));
    expect(getByDisplayValue("")).toBeInTheDocument();
  });

  it("deletes the last character", () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    fireEvent.click(getByText("C"));
    expect(getByDisplayValue("")).toBeInTheDocument();
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    fireEvent.click(getByText("C"));
    expect(getByDisplayValue("")).toBeInTheDocument();
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    fireEvent.click(getByText("C"));
    expect(getByDisplayValue("")).toBeInTheDocument()
});