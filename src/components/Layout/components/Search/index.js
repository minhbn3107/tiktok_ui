import { faXmarkCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as BounceWrapper } from '~/components/Bounce';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);

  const handleClear = () => {
    setSearchValue('');
    setSearchResults([]);
    inputRef.current.focus();
  };

  const handleHideResults = () => {
    setShowResults(false);
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResults && searchResults.length > 0}
      render={(attrs) => (
        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
          <BounceWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResults.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </BounceWrapper>
        </div>
      )}
      onClickOutside={handleHideResults}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search"
          spellCheck={false}
          onChange={(e) => {
            if (!e.target.value.startsWith(' ')) {
              setSearchValue(e.target.value);
            }
          }}
          onFocus={() => setShowResults(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
