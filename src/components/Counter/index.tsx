import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

import style from './styles.module.scss';

export const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState(false);

  const timer = () => {
    if (seconds < 60) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else if (minutes === 60) {
      setHours(hours + 1);
      setMinutes(0);
    }
  };

  useEffect(() => {
    if (start) {
      timer();
    }
  }, [seconds, start]);

  return (
    <div className={style.counterWrapper}>
      <div className={style.counter}>
        Отработано {hours} часов {minutes} минут {seconds} секунд
      </div>
      <Button type="primary" onClick={() => setStart(true)} className={style.btn}>
        Старт
      </Button>
      <Button type="primary" onClick={() => setStart(false)} className={style.btn}>
        Стоп
      </Button>
    </div>
  );
};
