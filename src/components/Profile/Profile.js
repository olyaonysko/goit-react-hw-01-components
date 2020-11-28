// import React from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import defaultProfilePhoto from '../default-profile.jpg';
import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location = 'Planet Earth',
  avatar = defaultProfilePhoto,
  stats,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <Stats stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

export default Profile;
