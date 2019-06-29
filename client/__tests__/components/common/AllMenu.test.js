import React from "react";
import { shallow } from "enzyme";
import AllMenu from "../../../components/common/AllMenu";

describe("<AllMenu />", () => {
  const props = {
    items: "item"
  };
  const wrapper = shallow(<AllMenu {...props} />);
  it("should render AllMenu component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
