import React from "react";
import { shallow } from "enzyme";
import Footer from "../../../components/common/Footer";

describe("<Footer />", () => {
  const wrapper = shallow(<Footer />);
  it("should render Footer component without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
