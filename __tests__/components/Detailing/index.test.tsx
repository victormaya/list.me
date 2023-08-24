import React from "react";

import Detailing from "components/Detailing";

import { render } from "@testing-library/react";
import { IProduct } from "interfaces/products";

// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt, width, height }: any) => (
  <img src={src} alt={alt} width={width} height={height} />
));

describe("Detailing", () => {
  const mockItem: IProduct = {
    thumbnailUrl: "mock-thumbnail-url",
    title: "Mock Item Title",
    brand: "Mock Brand",
    surface: "Mock Surface",
    size: "Mock Size",
    reproduction: "Mock Reproduction",
    description: "Mock Description",
    id: "",
    status: "",
    createdAt: "",
    categoryName: "",
    wordsForFilter: "",
    totalLikes: 0,
    totalDownloads: 0,
    totalBookmarks: 0,
    plan: "",
    application: "",
  };

  it("renders correctly", () => {
    const { getByText, getByTestId } = render(
      <Detailing left={100} item={mockItem} setCurrentCard={() => {}} />
    );

    const title = getByText("Mock Item Title");
    const brand = getByText("Mock Brand");
    const surface = getByText("Superficie: Mock Surface");
    const description = getByText("Mock Description");
    const downloadButton = getByText("Utilizar e especificar");
    const downloadIcon = downloadButton.querySelector("svg");
    const likeIcon = getByTestId("like-icon");
    const saveIcon = getByTestId("save-icon");
    const megaphoneIcon = getByTestId("megaphone-icon");

    expect(title).toBeInTheDocument();
    expect(brand).toBeInTheDocument();
    expect(surface).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
    expect(downloadIcon).toBeInTheDocument();
    expect(likeIcon).toBeInTheDocument();
    expect(saveIcon).toBeInTheDocument();
    expect(megaphoneIcon).toBeInTheDocument();
  });

  it("renders images correctly", () => {
    const { container } = render(
      <Detailing left={100} item={mockItem} setCurrentCard={() => {}} />
    );

    const images = container.querySelectorAll("img");
    expect(images.length).toBe(2);
  });
});
