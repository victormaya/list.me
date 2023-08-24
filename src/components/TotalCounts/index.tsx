import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsDownload, BsBookmark } from 'react-icons/bs'

import { IProduct } from 'interfaces/products'

import { DownloadLikesSaves } from './styles'

function TotalCounts({ item }: { item: IProduct }) {
  return (
    <DownloadLikesSaves>
      <li>
        <BsDownload /> {item.totalDownloads} downloads
      </li>
      <li className="withDot">
        <AiOutlineHeart />
        {item.totalBookmarks} likes
      </li>
      <li className="withDot">
        <BsBookmark />
        {item.totalBookmarks} salvos
      </li>
    </DownloadLikesSaves>
  )
}

export default TotalCounts
