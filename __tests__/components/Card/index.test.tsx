import React from "react";

import Card from "../../../src/components/Card";

import { render, fireEvent } from "@testing-library/react";
import { IProduct } from "interfaces/products";

const mockProduct: IProduct = {
  id: "9d68cf50-ad35-4068-aec6-212a1ceea3c8",
  status: "active",
  description: "RUSTIC FIT CARVÃO",
  createdAt: "2023-04-19 19:32:26.689",
  categoryName: "Tijolo",
  thumbnailUrl:
    "https://d1ptd3zs6hice0.cloudfront.net/collection/premium/Tijolo/Gauss/Gauss_RusticFitCarvao_06x26_rus_thumb.png",
  wordsForFilter:
    "RUSTIC FIT CARVÃO,Tijolo,Gauss,Rustico,Argila,6x26,Parede,RUSTIC FIT CARVAO",
  title: "RUSTIC FIT CARVÃO",
  totalLikes: 0,
  totalDownloads: 0,
  totalBookmarks: 0,
  plan: "free",
  brand: "Gauss",
  size: "6x26",
  surface: "Rustico",
  application: "Parede",
  reproduction: "Argila",
};

test("renders Card component", () => {
  const { getByText } = render(
    <Card item={mockProduct} currentCard="1" setCurrentCard={() => ""} />
  );

  const titleElement = getByText(/RUSTIC FIT CARVÃO/i);
  const brandElement = getByText(/Gauss 6x26/i);
  expect(titleElement).toBeInTheDocument();
  expect(brandElement).toBeInTheDocument();
});

test("clicking on the card triggers setCurrentCard", () => {
  const setCurrentCardMock = jest.fn();
  const { getByText } = render(
    <Card
      item={mockProduct}
      currentCard="1"
      setCurrentCard={setCurrentCardMock}
    />
  );

  const cardContainer = getByText("Novo");
  fireEvent.click(cardContainer);
  expect(setCurrentCardMock).toHaveBeenCalledWith(
    "9d68cf50-ad35-4068-aec6-212a1ceea3c8"
  );
});
