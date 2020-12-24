import firebase from 'firebase';

const USERS = 'USERS';

export const users = () => {
  const user = async () => {
    const res = await firebase.firestore().collection('users').add({
      born: 1912,
      first: 'Alan',
      last: 'Turing',
      middle: 'Mathison',
    });

    console.log('res', res);
    return res;
  };

  console.log('user', user());
  return {
    payload: user,
    type: USERS,
  };
};
