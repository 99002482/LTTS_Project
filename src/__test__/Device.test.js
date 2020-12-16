import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDom from "react-dom";
import Device from "../component/Device";

describe("Device", () => {
  it("renders Device page without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Device></Device>, div);
  });

  it("Text fields working", () => {
    const { getAllByText } = render(<Device />);
    getAllByText("Devices");
    getAllByText("ID");
    getAllByText("Name");
  });

  it("view Details button working", () => {
    render(<Device />);
      screen.getByRole("button", { hidden: true });
  });
});
