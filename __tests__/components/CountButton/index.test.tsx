import React from "react";

import CountButton from "../../../src/components/CountButton";

import { render } from "@testing-library/react";

describe("CountButton", () => {
  it("renders download icon correctly", () => {
    const { getByTestId } = render(<CountButton type="download" total={10} />);
    const icon = getByTestId("download-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders like icon correctly", () => {
    const { getByTestId } = render(<CountButton type="like" total={20} />);
    const icon = getByTestId("like-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders save icon correctly", () => {
    const { getByTestId } = render(<CountButton type="save" total={30} />);
    const icon = getByTestId("save-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders the total correctly", () => {
    const { getByText } = render(<CountButton type="download" total={5} />);
    const totalText = getByText("5");
    expect(totalText).toBeInTheDocument();
  });
});
