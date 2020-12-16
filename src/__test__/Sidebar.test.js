import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDom from "react-dom";
import Device from "../component/Sidebar";
import Sidebar from "../component/Sidebar";

describe("Device", () => {
  it("renders Device page without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Sidebar></Sidebar>, div);
  });

  it("Organisation and location field working", () => {
    const { getAllByText } = render(<Sidebar />);
    getAllByText("Organisation Name");
    getAllByText("Locations");
  });
});
