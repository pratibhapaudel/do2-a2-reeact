import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("Calculator", () => {
  it("renders the calculator component without crashing", () => {
    shallow(<Calculator />);
  });

  it("adds numbers correctly", () => {
    const wrapper = shallow(<Calculator />);
    wrapper.find('button[name="2"]').simulate("click");
    wrapper.find('button[name="+"]').simulate("click");
    wrapper.find('button[name="3"]').simulate("click");
    wrapper.find('button[name="="]').simulate("click");
    expect(wrapper.find("input").props().value).toEqual("5");
  });

  it("subtracts numbers correctly", () => {
    const wrapper = shallow(<Calculator />);
    wrapper.find('button[name="5"]').simulate("click");
    wrapper.find('button[name="-"]').simulate("click");
    wrapper.find('button[name="3"]').simulate("click");
    wrapper.find('button[name="="]').simulate("click");
    expect(wrapper.find("input").props().value).toEqual("2");
  });

  it("multiplies numbers correctly", () => {
    const wrapper = shallow(<Calculator />);
    wrapper.find('button[name="4"]').simulate("click");
    wrapper.find('button[name="*"]').simulate("click");
    wrapper.find('button[name="3"]').simulate("click");
    wrapper.find('button[name="="]').simulate("click");
    expect(wrapper.find("input").props().value).toEqual("12");
  });

  it("divides numbers correctly", () => {
    const wrapper = shallow(<Calculator />);
    wrapper.find('button[name="9"]').simulate("click");
    wrapper.find('button[name="/"]').simulate("click");
    wrapper.find('button[name="3"]').simulate("click");
    wrapper.find('button[name="="]').simulate("click");
    expect(wrapper.find("input").props().value).toEqual("3");
  });

  it("handles invalid input gracefully", () => {
    const wrapper = shallow(<Calculator />);
    wrapper.find('button[name="5"]').simulate("click");
    wrapper.find('button[name="+"]').simulate("click");
    wrapper.find('button[name="."]').simulate("click");
    wrapper.find('button[name="3"]').simulate("click");
    wrapper.find('button[name="."]').simulate("click");
    wrapper.find('button[name="6"]').simulate("click");
    wrapper.find('button[name="="]').simulate("click");
    expect(wrapper.find("input").props().value).toEqual("5.3+0.6");
  });
});
