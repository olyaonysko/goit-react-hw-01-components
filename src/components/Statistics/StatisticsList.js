// import React from 'react'
import s from './Statistics.module.css';
import getRandomColor from './randomColor';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={s.statList}>
      {stats.map(item => (
        <li
          className={s.statListItem}
          key={item.id}
          style={{ backgroundColor: getRandomColor() }}
        >
          <span className={s.label}>{item.label}</span>
          <span className={s.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
export default StatisticsList;
