import React from "react";

import IconButton from "components/IconButton";

import { render } from "@testing-library/react";

describe("IconButton", () => {
  it("renders megaphone icon correctly", () => {
    const { getByTestId } = render(<IconButton type="megaphone" />);
    const icon = getByTestId("megaphone-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders like icon correctly", () => {
    const { getByTestId } = render(<IconButton type="like" />);
    const icon = getByTestId("like-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders save icon correctly", () => {
    const { getByTestId } = render(<IconButton type="save" />);
    const icon = getByTestId("save-icon");
    expect(icon).toBeInTheDocument();
  });
});
