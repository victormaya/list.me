import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsDownload, BsBookmark } from "react-icons/bs";

import { IProduct } from "interfaces/products";

import { DownloadLikesSaves } from "./styles";

function TotalCounts({ item }: { item: IProduct }) {
  return (
    <DownloadLikesSaves>
      <li>
        <BsDownload /> {item.totalDownloads} <span>downloads</span>
      </li>
      <li className="withDot">
        <AiOutlineHeart />
        {item.totalBookmarks} <span>likes</span>
      </li>
      <li className="withDot">
        <BsBookmark />
        {item.totalBookmarks} <span>salvos</span>
      </li>
    </DownloadLikesSaves>
  );
}

export default TotalCounts;
