import React, { useEffect } from 'react';
import firebase from 'firebase';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { TodayCard } from '../TodayCard';
import { Counter } from '../Counter';

// import { projectsList } from '../../store/actions/projectsList';

export const Header = () => {
  const dispatch = useDispatch();
  const projectsListSelector = useSelector((state: RootStateOrAny) => state.projectsList);

  useEffect(() => {
    // dispatch(projectsList());
  }, []);

  return (
    <header>
      <h1>MishkiERP</h1>
      <TodayCard />
      <Counter />
    </header>
  );
};
