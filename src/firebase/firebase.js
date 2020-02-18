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

  database.ref().set({
     name: 'Tam Nguyen',
     age: 30,
     isSingle: true,
     location: {
         city: 'DaNang',
         country: 'VietNam'
     }
  });

//   database.ref().set('This is my data.');
database.ref('age').set(32);
database.ref('location/city').set('HaNoi');
database.ref('attributes').set ( {
    height: 165,
    weight: 62
});