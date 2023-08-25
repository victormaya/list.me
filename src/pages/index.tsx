import { useEffect, useState } from 'react'

import axios from 'axios'
import Card from 'components/Card'
import Search from 'components/Search'
import { IProducts } from 'interfaces/products'
import { useRouter } from 'next/router'
import { CardSkeleton, CardsContainer, Main } from 'styles/Home'

const generateGenericArrayToSkeleton = () => new Array(26).fill(null)

export default function Home() {
  const router = useRouter()

  const [currentCard, setCurrentCard] = useState('-1')
  const [products, setProducts] = useState<IProducts>([])

  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState<IProducts>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      axios
        .get('http://localhost:3001/products')
        .then((response) => {
          setProducts(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          router.push('/404')
        })
        .finally(() => {
          setLoading(false)
        })
    }, 3000)
  }, [router])

  useEffect(() => {
    setCurrentCard('-1')
    const handleSearch = () => {
      const filteredResults = products.filter((item) =>
        item.wordsForFilter.toLowerCase().includes(searchText)
      )

      setFilteredData(filteredResults)
    }
    if (searchText.length) {
      handleSearch()
    } else setFilteredData(products)
  }, [products, searchText])

  return (
    <Main>
      <>
        <Search setSearchText={setSearchText} />
        <CardsContainer>
          {!loading
            ? filteredData.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard}
                />
              ))
            : generateGenericArrayToSkeleton().map((item, index) => (
                <CardSkeleton key={index} />
              ))}
        </CardsContainer>
      </>
    </Main>
  )
}
