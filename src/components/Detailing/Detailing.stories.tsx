import React from 'react'

import Detailing from '.'
export default {
  title: 'Detailing',
  component: Detailing
}

const mockItem = {
  id: '9d68cf50-ad35-4068-aec6-212a1ceea3c8',
  status: 'active',
  description: 'RUSTIC FIT CARVÃO',
  createdAt: '2023-04-19 19:32:26.689',
  categoryName: 'Tijolo',
  thumbnailUrl:
    'https://d1ptd3zs6hice0.cloudfront.net/collection/premium/Tijolo/Gauss/Gauss_RusticFitCarvao_06x26_rus_thumb.png',
  wordsForFilter:
    'RUSTIC FIT CARVÃO,Tijolo,Gauss,Rustico,Argila,6x26,Parede,RUSTIC FIT CARVAO',
  title: 'RUSTIC FIT CARVÃO',
  totalLikes: 0,
  totalDownloads: 0,
  totalBookmarks: 0,
  plan: 'free',
  brand: 'Gauss',
  size: '6x26',
  surface: 'Rustico',
  application: 'Parede',
  reproduction: 'Argila'
}

export const Default = () => (
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  <Detailing left={0} item={mockItem} setCurrentCard={() => {}} />
)
