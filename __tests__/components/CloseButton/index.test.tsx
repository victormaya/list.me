import React from "react";
import { MdOutlineClose } from "react-icons/md";

import CloseButton from "../../../src/components/CloseButton";

import { render, fireEvent } from "@testing-library/react";

describe("CloseButton", () => {
  it("should render correctly", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<CloseButton handleClick={handleClick} />);

    const closeButton = getByRole("button");
    expect(closeButton).toBeInTheDocument();
  });

  it("should call handleClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<CloseButton handleClick={handleClick} />);

    const closeButton = getByRole("button");
    fireEvent.click(closeButton);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
