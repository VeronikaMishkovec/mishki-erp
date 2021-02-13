import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

import './styles.scss';

export const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [counter, setCounter] = useState({ seconds: 0 });

  const timer = () => {
    if (seconds < 60) {
      setTimeout(() => {
        setSeconds(seconds + 1);
      }, 1000);
    } else if (seconds === 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
  };

  useEffect(() => {
    timer();
  }, [seconds]);

  return (
    <div className="counterWrapper">
      <div className="counter">
        {minutes}:{seconds}
      </div>
      <Button type="primary">Старт</Button>
    </div>
  );
};
