import React from 'react'

import { storiesOf } from '@storybook/react'
import { IProduct } from 'interfaces/products'

import Card from '.'

const mockProduct: IProduct = {
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

storiesOf('Card', module)
  .add('Default', () => (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <Card item={mockProduct} currentCard="" setCurrentCard={() => {}} />
  ))
  .add('Opened', () => (
    <Card
      item={mockProduct}
      currentCard="9d68cf50-ad35-4068-aec6-212a1ceea3c8"
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      setCurrentCard={() => {}}
    />
  ))
