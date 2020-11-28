import s from './Stats.module.css';

const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ul className={s.stats}>
      <li className={s.statsItem}>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}> {followers}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Views</span>
        <span className={s.quantity}> {views}</span>
      </li>
      <li className={s.statsItem}>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}> {likes}</span>
      </li>
    </ul>
  );
};

export default Stats;
