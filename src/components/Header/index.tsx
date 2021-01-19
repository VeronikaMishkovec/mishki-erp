import React, { useEffect } from 'react';
import firebase from 'firebase';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
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
      <Button type="primary">Set Data</Button>
    </header>
  );
};
