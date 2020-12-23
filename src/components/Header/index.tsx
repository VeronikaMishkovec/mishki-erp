import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { Button } from 'antd';
import firebase from 'firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../../store/actions/setDate';
import { sendDataToFirebase } from '../../utils/utils';

export const Header = () => {
  const dispatch = useDispatch();
  // const startDate = useSelector((state) => state.startDate);
  const [startDate, setStartDate] = useState('');
  const today: string = DateTime.local().toString();

  // const sendData = () => {
  //   const db: any = firebase.database();
  //   db.ref('startDate').push(startDate);
  // };

  useEffect(() => {
    dispatch(setDate(startDate));
  }, []);

  return (
    <header>
      <h1>MishkiERP</h1>
      <Button
        type="primary"
        onClick={() => {
          setStartDate(today);
          sendDataToFirebase('startDate', startDate);
        }}
      >
        Set Date
      </Button>
    </header>
  );
};
