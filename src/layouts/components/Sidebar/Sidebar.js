import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import FollowingAccounts from '~/components/FollowingAccounts/FollowingAccounts';
import {
  HomeIcon,
  HomeActiveIcon,
  UsersIcon,
  UsersActiveIcon,
  CompassIcon,
  CompassActiveIcon,
  VideoRecorderIcon,
  VideoRecorderActiveIcon,
} from '~/components/Icons/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UsersIcon />}
          activeIcon={<UsersActiveIcon />}
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={<CompassIcon />}
          activeIcon={<CompassActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<VideoRecorderIcon />}
          activeIcon={<VideoRecorderActiveIcon />}
        />
      </Menu>
      <FollowingAccounts label="Suggested accounts" />
      <FollowingAccounts label="Following accounts" />
    </aside>
  );
}

export default Sidebar;
