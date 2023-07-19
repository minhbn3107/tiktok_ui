import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmarkCircle,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faLanguage,
  faCircleQuestion,
  faKeyboard,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as BounceWrapper } from '~/components/Bounce';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Bounce/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
  {
    icon: <FontAwesomeIcon icon={faMoon} />,
    title: 'Dark mode',
  },
];

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResults([]);
    }, 0);
  }, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo-container')}>
          <img src={images.logo} className={cx('logo')} alt="logo" />
        </div>
        <Tippy
          interactive
          visible={searchResults.length > 0}
          render={(attrs) => (
            <div className={cx('search-results')} tabIndex="-1" {...attrs}>
              <BounceWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </BounceWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faXmarkCircle} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('actions')}>
          <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
            Upload
          </Button>
          <Button primary>Log in</Button>

          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            <button className={cx('see-more-btn')}>
              <FontAwesomeIcon className={cx('see-more-icon')} icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
