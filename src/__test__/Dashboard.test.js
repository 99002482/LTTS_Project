import React from "react";
import ReactDom from "react-dom";
import { render } from "@testing-library/react";
import Sidebar from "../component/Sidebar";
import Cardview from "../component/Cardview";


describe("Dashboard", () => {

  it("Organisation text field working", () => {
    const { getAllByText, getByPlaceholderText } = render(<Sidebar />);
    getAllByText("Overview Dashboard");
    getByPlaceholderText("Organisation name");
    
  });
  
  it("renders Sidebar  without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Sidebar></Sidebar>, div);
  });

  it("renders Cardview  without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Cardview></Cardview>, div);
  });

  it("location dropdown working", () => {
    const { getAllByText} = render(<Sidebar />);
    getAllByText("Select...");
  });
  
});
