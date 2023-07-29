import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0a0e0a89ec8f7df2024635ec41015ec2.jpeg?x-expires=1690794000&x-signature=g8heOejtj0QLvj7EQFJ6cUZRzE8%3D"
        />
        <Button className={cx('follow-btn')} primary>
          Follow
        </Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nick-name')}>
          <strong>khoikhoi</strong>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
        </p>
        <p className={cx('full-name')}>Mạnh Văn Khôi</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M</strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
