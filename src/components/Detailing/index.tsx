import React, { useEffect, useRef } from 'react'
import { BsDownload } from 'react-icons/bs'

import CloseButton from 'components/CloseButton'
import IconButton from 'components/IconButton'
import TotalCounts from 'components/TotalCounts'
import { IProduct } from 'interfaces/products'
import Image from 'next/image'

import {
  BigButton,
  ContentDown,
  DetailingContainer,
  Details,
  DetailsTitle,
  ItemBrand,
  ItemTitle,
  LeftSide,
  Megaphone,
  MiniThumb,
  RightSide,
  TitleBrandMegaphone
} from './styles'

function Detailing({
  left,
  item,
  setCurrentCard
}: {
  left: number | null
  item: IProduct
  setCurrentCard: React.Dispatch<React.SetStateAction<string>>
}) {
  const detailingContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (detailingContainerRef.current && left) {
      const value = left - 38
      detailingContainerRef.current.style.left = `-${value}px`
    }
  }, [left])

  return (
    <DetailingContainer ref={detailingContainerRef}>
      <CloseButton handleClick={() => setCurrentCard('-1')} />
      <LeftSide>
        <MiniThumb>
          <Image
            src={item.thumbnailUrl}
            alt={item.title}
            width={54}
            height={54}
          />
        </MiniThumb>
        <Image
          src={item.thumbnailUrl}
          alt={item.title}
          width={356}
          height={356}
        />
      </LeftSide>
      <RightSide>
        <TitleBrandMegaphone>
          <div>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemBrand>
              <span>Marca:</span> {item.brand}
            </ItemBrand>
          </div>
        </TitleBrandMegaphone>
        <TotalCounts item={item} />
        <DetailsTitle>Detalhes do Produto</DetailsTitle>
        <Details>
          <li>Superficie: {item.surface}</li>
          <li>Formato: {item.size}</li>
          <li>Reprodução: {item.reproduction}</li>
        </Details>
        <DetailsTitle>Descrição</DetailsTitle>
        <Details>
          <li>{item.description}</li>
        </Details>
        <ContentDown>
          <BigButton>
            <BsDownload /> Utilizar e especificar
          </BigButton>
          <IconButton type="like" />
          <IconButton type="save" />
          <Megaphone>
            <IconButton type="megaphone" />
          </Megaphone>
        </ContentDown>
      </RightSide>
    </DetailingContainer>
  )
}

export default Detailing
