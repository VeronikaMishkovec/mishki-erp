import React from 'react';
import { TodayCard } from '../TodayCard';
import { Counter } from '../Counter';

export const Header = () => {
  return (
    <header>
      <h1>MishkiERP</h1>
      {/* <TodayCard /> */}
      <Counter />
    </header>
  );
};
