import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as BounceWrapper } from '~/components/Bounce';
import Image from '~/components/Image';
import styles from './FollowingAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div className={cx('preview')} tabIndex="-1" {...props}>
        <BounceWrapper>
          <AccountPreview />
        </BounceWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0a0e0a89ec8f7df2024635ec41015ec2.jpeg?x-expires=1690794000&x-signature=g8heOejtj0QLvj7EQFJ6cUZRzE8%3D"
            alt=""
          />
          <div className={cx('item-info')}>
            <p className={cx('nick-name')}>
              <strong>khoikhoi</strong>
              <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
            </p>
            <p className={cx('full-name')}>Manh Van Khoi</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
