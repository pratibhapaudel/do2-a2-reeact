import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Calculator from "./calculator";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Calculator", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it("should render a div with className 'calculator'", () => {
    expect(wrapper.find("div.calculator")).toHaveLength(1);
  });

  it("should render an input field with the result value", () => {
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("input").prop("value")).toEqual("");
  });
  it("renders a number display", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });
  it("handles multiple operators correctly", () => {
    wrapper.find("button[name='4']").simulate("click");
    wrapper.find("button[name='+']").simulate("click");
    wrapper.find("button[name='-']").simulate("click");
    wrapper.find("button[name='2']").simulate("click");
    wrapper.find("button[name='*']").simulate("click");
    wrapper.find("button[name='3']").simulate("click");
    wrapper.find("button[name='/']").simulate("click");
    wrapper.find("button[name='2']").simulate("click");
    wrapper.find("button[id='result']").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("Error");
  });

  it("should handle button clicks and update the result value", () => {
    wrapper.find("button[name='1']").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
    wrapper.find("button[name='+']").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
    wrapper.find("button[name='2']").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
    wrapper.find("button[id='result']").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("Error");
  });

  it("should handle the clear button click and reset the result value", () => {
    wrapper.find("button#clear").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
  });

  it("should handle the backspace button click and remove the last character from the result value", () => {
    wrapper.find("button[name='1']").simulate("click");
    wrapper.find("button[name='2']").simulate("click");
    wrapper.find("button[name='3']").simulate("click");
    wrapper.find("button#backspace").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
    wrapper.find("button#backspace").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
    wrapper.find("button#backspace").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("");
  });

  it("should handle invalid expressions and show 'Error' in the result field", () => {
    wrapper.find("button[name='1']").simulate("click");
    wrapper.find("button[name='+']").simulate("click");
    wrapper.find("button[name='2']").simulate("click");
    wrapper.find("button[id='result']").simulate("click");
    expect(wrapper.find("input").prop("value")).toEqual("Error");
  });
});
