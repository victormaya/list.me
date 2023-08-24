import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react';
import { BsSearch } from 'react-icons/bs';

import styles from './styles.module.css';

import useDebounce from '../../hooks/useDebounce'; // Importando o hook useDebounce

function Search({
  setSearchText
}: {
  setSearchText: Dispatch<SetStateAction<string>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const debouncedSearchText = useDebounce(inputValue, 1000);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        (event.key === 'f' || event.key === 'F') &&
        (event.ctrlKey || event.metaKey)
      ) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    setSearchText(debouncedSearchText);
  }, [debouncedSearchText, setSearchText]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <input
          className={styles.searchInput}
          ref={inputRef}
          type="text"
          placeholder="Busque o produto desejado"
          value={inputValue}
          onChange={handleInputChange}
        />
        <BsSearch />
      </div>
    </div>
  );
}

export default Search;
