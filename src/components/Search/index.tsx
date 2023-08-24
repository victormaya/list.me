import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'
import { BsSearch } from 'react-icons/bs'

import useDebounce from '../../hooks/useDebounce' // Importando o hook useDebounce
import { InputContainer, SearchContainer, SearchInput } from './styles'

function Search({
  setSearchText
}: {
  setSearchText: Dispatch<SetStateAction<string>>
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState('')

  const debouncedSearchText = useDebounce(inputValue, 1000)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.key === 'f' || event.key === 'F') &&
        (event.ctrlKey || event.metaKey)
      ) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  useEffect(() => {
    setSearchText(debouncedSearchText)
  }, [debouncedSearchText, setSearchText])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <SearchContainer>
      <InputContainer>
        <SearchInput
          ref={inputRef}
          type="text"
          placeholder="Busque o produto desejado"
          value={inputValue}
          onChange={handleInputChange}
        />
        <BsSearch data-testid="search-icon" />
      </InputContainer>
    </SearchContainer>
  )
}

export default Search
