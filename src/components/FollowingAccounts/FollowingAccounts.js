import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('label')}>{label}</h2>
      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx('see-more-btn')}>See more</p>
    </div>
  );
}

FollowingAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
