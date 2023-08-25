/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import CountButton from 'components/CountButton'
import Detailing from 'components/Detailing'
import Tag from 'components/Tag'
import { IProduct } from 'interfaces/products'
import Image from 'next/image'

import {
  CardDetailingContainer,
  CardContainer,
  ImageContainer,
  CardTitle,
  CardBrand,
  CardBrandBall,
  CardButtons,
  CardButtonsLeft
} from './styles'

function Card({
  item,
  currentCard,
  setCurrentCard
}: {
  item: IProduct
  currentCard: string
  setCurrentCard: Dispatch<SetStateAction<string>>
}) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [elementLeft, setElementLeft] = useState<number | null>(null)

  useEffect(() => {
    const updateElementLeft = () => {
      if (elementRef.current) {
        const { left } = elementRef.current.getBoundingClientRect()
        setElementLeft(left)
      }
    }

    updateElementLeft()

    window.addEventListener('resize', updateElementLeft)

    return () => {
      window.removeEventListener('resize', updateElementLeft)
    }
  }, [currentCard])

  const handleButtonClick = (id: string) => {
    setCurrentCard(id)
  }

  function formatSize(value: string) {
    if (!value.includes('x')) {
      return null
    }
    return (
      <>
        <CardBrandBall>●</CardBrandBall>
        {item.size.replace(/"/g, '')}
      </>
    )
  }

  return (
    <CardDetailingContainer opened={currentCard === item.id}>
      <CardContainer
        ref={elementRef}
        onClick={() => handleButtonClick(item.id)}
      >
        <Tag />
        <ImageContainer>
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            width={243}
            height={243}
          />
        </ImageContainer>
        <CardTitle>{item.title}</CardTitle>
        <CardBrand>
          {item.brand.replace(/"/g, '')} {formatSize(item.size)}
        </CardBrand>
        <CardButtons>
          <CardButtonsLeft>
            <CountButton type="download" total={item.totalDownloads} />
            <CountButton type="like" total={item.totalLikes} />
          </CardButtonsLeft>
          <div>
            <CountButton type="save" total={item.totalBookmarks} />
          </div>
        </CardButtons>
      </CardContainer>
      {currentCard === item.id && (
        <Detailing
          item={item}
          left={elementLeft}
          setCurrentCard={setCurrentCard}
        />
      )}
    </CardDetailingContainer>
  )
}

export default Card
