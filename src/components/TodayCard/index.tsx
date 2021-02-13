import React from 'react';

import { DateTime } from 'luxon';

import './styles.scss';

export const TodayCard = () => {
  const today = DateTime.local().toLocaleString();
  const time = DateTime.local().toLocaleString(DateTime.TIME_24_SIMPLE);
  return (
    <div className="todayCard">
      <div className="header">
        Сегодня: <span>{today}</span>
      </div>
      <div className="time">Время: {time}</div>
    </div>
  );
};
