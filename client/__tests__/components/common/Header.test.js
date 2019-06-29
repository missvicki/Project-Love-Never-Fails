import React from "react";
import { shallow } from "enzyme";
import Header from "../../../components/common/Header";

describe("<Header />", () => {
  const wrapper = shallow(<Header />);
  it("should render Header component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
