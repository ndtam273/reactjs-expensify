import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAnMDKUX54AILq893cpy4dYPq93Hr45ufw",
  authDomain: "expensify-19ed7.firebaseapp.com",
  databaseURL: "https://expensify-19ed7.firebaseio.com",
  projectId: "expensify-19ed7",
  storageBucket: "expensify-19ed7.appspot.com",
  messagingSenderId: "248026656408",
  appId: "1:248026656408:web:5bffb2cfc4b017b0822aed"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export  { firebase, database as default };

// child remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// child change
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child add
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


//
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//   });

  // database.ref('expensives').push(
  //   {
  //     description: 'Rent' ,
  //     note: '',
  //     amount: 109500,
  //     createdAt: 976123498763
  //   }
  // );

