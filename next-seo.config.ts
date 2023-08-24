import { NextSeoProps } from 'next-seo'

export default {
  titleTemplate: 'List.me',
  defaultTitle: 'List.me',
  description: 'List.me',
  openGraph: {
    title: 'List.me',
    type: 'website',
    locale: 'pt_BR',
    description: 'List.me',
    images: [
      {
        url: '/img/nextjs-logo.svg',
        alt: 'List.me',
        height: 1200,
        width: 630
      }
    ]
  }
} as NextSeoProps
