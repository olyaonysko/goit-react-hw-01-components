import s from './Statistics.module.css';
import getRandomColor from './randomColor';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          className={s.statListItem}
          key={id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
export default StatisticsList;
