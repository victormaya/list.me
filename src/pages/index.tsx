import { useEffect, useState } from 'react'

import axios from 'axios'
import Card from 'components/Card'
import Loading from 'components/Loading'
import Search from 'components/Search'
import { IProducts } from 'interfaces/products'
import { useRouter } from 'next/router'
import { CardsContainer, Main } from 'styles/Home'

export default function Home() {
  const router = useRouter()

  const [currentCard, setCurrentCard] = useState('-1')
  const [products, setProducts] = useState<IProducts>([])

  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState<IProducts>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then((response) => {
        setProducts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        router.push('/404')
      })
  }, [])

  useEffect(() => {
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search setSearchText={setSearchText} />
          <CardsContainer>
            {filteredData.map((item) => (
              <Card
                key={item.id}
                item={item}
                currentCard={currentCard}
                setCurrentCard={setCurrentCard}
              />
            ))}
          </CardsContainer>
        </>
      )}
    </Main>
  )
}
