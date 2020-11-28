import PropTypes from 'prop-types';
import defaultProfilePhoto from '../default-profile.jpg';
import s from './FriendList.module.css';

const FriendListItem = ({
  id,
  avatar = defaultProfilePhoto,
  name,
  isOnline,
}) => {
  const isOnlineClass = isOnline ? s.online : s.offline;
  return (
    <li key={id} className={s.item}>
      <span className={isOnlineClass}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

export default FriendListItem;
