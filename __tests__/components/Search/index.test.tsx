import React from "react";

import Search from "components/Search";

import { fireEvent, render } from "@testing-library/react";

jest.mock("hooks/useDebounce", () => (value) => value);

describe("Search", () => {
  it("renders search input and icon correctly", () => {
    const setSearchText = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <Search setSearchText={setSearchText} />
    );

    const input = getByPlaceholderText("Busque o produto desejado");
    const searchIcon = getByTestId("search-icon");

    expect(input).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
  });

  it("calls setSearchText on input change", () => {
    const setSearchText = jest.fn();
    const { getByPlaceholderText } = render(
      <Search setSearchText={setSearchText} />
    );

    const input = getByPlaceholderText("Busque o produto desejado");
    fireEvent.change(input, { target: { value: "search query" } });

    expect(setSearchText).toHaveBeenCalledWith("search query");
  });

  it("focuses on input when pressing Ctrl/Cmd + F", () => {
    const setSearchText = jest.fn();
    const { getByPlaceholderText } = render(
      <Search setSearchText={setSearchText} />
    );

    const input = getByPlaceholderText("Busque o produto desejado");
    fireEvent.keyDown(window, { key: "f", code: "f", ctrlKey: true });
    fireEvent.keyDown(window, { key: "F", code: "F", metaKey: true });

    expect(document.activeElement).toEqual(input);
  });
});
