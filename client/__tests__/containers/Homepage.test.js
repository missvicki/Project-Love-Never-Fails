import React from "react";
import { shallow } from "enzyme";
import Homepage from "../../containers/Homepage";

describe("<Homepage />", () => {
  const wrapper = shallow(<Homepage />);
  it("should render Homepage without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
